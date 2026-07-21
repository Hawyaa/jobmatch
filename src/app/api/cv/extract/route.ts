import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You extract structured profile data from raw CV text.
Return ONLY valid JSON, no markdown, no preamble, no code fences. Use this exact shape:
{
  "skills": string[],
  "seniority": "junior" | "mid" | "senior",
  "titles": string[],
  "years_exp": number
}
Rules:
- "skills" = technical skills, tools, languages, frameworks mentioned.
- "titles" = job titles or roles the person has held or is training for.
- "seniority": junior = 0-2 years or still a student, mid = 2-5 years, senior = 5+ years.
- "years_exp" = your best estimate of total relevant experience in years (0 if a student with no professional experience).
- If something can't be determined, use a reasonable empty value (empty array, 0, or "junior") — never omit a field.`;

export async function POST(req: NextRequest) {
  try {
    // 1. Verify the user is logged in
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.split("Bearer ")[1];
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    await adminAuth.verifyIdToken(token);

    // 2. Get raw text from the request
    const { rawText } = await req.json();
    if (!rawText || typeof rawText !== "string") {
      return NextResponse.json({ error: "No CV text provided" }, { status: 400 });
    }

    // 3. Call Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: rawText.slice(0, 8000) },
      ],
      temperature: 0.2,
    });

    const content = completion.choices[0]?.message?.content || "{}";

    // 4. Parse the JSON response (strip code fences if the model adds them anyway)
    const cleaned = content.replace(/```json|```/g, "").trim();
    let profile;
    try {
      profile = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        { error: "Couldn't parse profile from CV text" },
        { status: 502 }
      );
    }

    return NextResponse.json({ profile });
  } catch (err) {
    console.error("CV extract error:", err);
    return NextResponse.json(
      { error: "Failed to extract profile" },
      { status: 500 }
    );
  }
}