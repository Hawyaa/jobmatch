import { NextRequest, NextResponse } from "next/server";

// TODO: user message -> Groq (system prompt = site guide) -> reply
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "not implemented yet" }, { status: 501 });
}
