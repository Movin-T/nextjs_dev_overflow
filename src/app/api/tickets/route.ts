import { NextResponse } from "next/server";

import tickets from "@/app/database";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const ticket = await request.json();

  tickets.push({ ...ticket, id: tickets.length + 1 });

  return NextResponse.json(tickets);
}
