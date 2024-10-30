import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import bcrypt from "bcrypt";
import { z } from "zod";

const schema = z.object({
  currentPassword: z.string().min(5).max(12),
  newPassword: z.string().min(5).max(12),
});

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  const validation = schema.safeParse(body);

  // Check if the passwords in the request body are valid
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  }

  // Get the current and new passwords
  const { currentPassword, newPassword } = body;

  // Check the user exists in the database
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Check if the hashed input password matches the hashed password in the database
  const currentPasswordMatchesDatabse = await bcrypt.compare(
    currentPassword,
    user.hashedPassword!
  );
  if (!currentPasswordMatchesDatabse) {
    return NextResponse.json(
      { message: "Incorrect password" },
      { status: 400 }
    );
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user with the new hashed password
  const updated = await prisma.user.update({
    where: {
      email: session!.user!.email!,
    },
    data: {
      hashedPassword: hashedPassword,
    },
  });

  // Check if the password was updated
  if (!updated) {
    return NextResponse.json(
      { message: "Password could not be updated" },
      { status: 500 }
    );
  }
  // Return a success message
  return NextResponse.json({ message: "Password updated" });
}
