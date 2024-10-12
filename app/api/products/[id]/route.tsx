import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10 || id < 1)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id, name: `Product${id}`, price: 12.34 });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  if (id > 10 || id < 1)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id, name: body.name, price: body.price });
}

export function DELETE(request: NextRequest, {params: {id}}: {params: {id: number}}) {
    if (id > 10 || id < 1)
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({id, message: "Product deleted"});
}