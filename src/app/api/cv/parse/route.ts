import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";

export async function POST(req: NextRequest) {
  try {
    // 1. Verify the user is logged in
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.split("Bearer ")[1];
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;

    // 2. Get the uploaded file
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    let rawText = "";

    // 3. Extract text based on file type
    if (file.type === "application/pdf") {
      const parser = new PDFParse({ data });
      const result = await parser.getText();
      rawText = result.text;
      await parser.destroy();
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const buffer = Buffer.from(arrayBuffer);
      const result = await mammoth.extractRawText({ buffer });
      rawText = result.value;
    } else {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    if (!rawText.trim()) {
      return NextResponse.json(
        { error: "Couldn't extract any text from this file" },
        { status: 422 }
      );
    }

    return NextResponse.json({ uid, rawText });
  } catch (err) {
    console.error("CV parse error:", err);
    return NextResponse.json(
      { error: "Failed to parse CV" },
      { status: 500 }
    );
  }
}