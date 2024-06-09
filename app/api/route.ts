import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from "jsonwebtoken";
export async function GET() {
  const token = jwt.sign({
    data:{
      name:"Siraj Khan",
      role:"ADMIN"
    }
  },
  // @ts-ignore
  process.env.NEXT_PUBLIC_ADMIN_SECRET,
  {expiresIn:600}
  );
  return NextResponse.json({ token},{status:200});
}

export async function POST(request:NextRequest) {
  return NextResponse.json({ message: 'Hello - POST' });
}

export async function PUT() {
  return NextResponse.json({ message: 'Hello - PUT' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Hello - DELETE' });
}
