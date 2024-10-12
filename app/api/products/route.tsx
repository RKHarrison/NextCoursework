import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Toothbrush", price: 599 },
    { id: 2, name: "Toothpaste", price: 199 },
    { id: 3, name: "Mouthwash", price: 299 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
