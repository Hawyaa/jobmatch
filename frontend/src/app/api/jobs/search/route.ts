import { NextRequest, NextResponse } from "next/server";

// TODO: take profile + filters, call JSearch API, return normalized job results
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "not implemented yet" }, { status: 501 });
}
