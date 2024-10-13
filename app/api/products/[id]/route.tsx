import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  
  return NextResponse.json(product);
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

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10 || id < 1)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id, message: "Product deleted" });
}
