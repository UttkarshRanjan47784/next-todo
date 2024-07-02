import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let res = await prisma.list.create({ data: body });
    return NextResponse.json({ stat: true, msg: `List created successfully` });
  } catch (error) {
    return NextResponse.json({
      stat: false,
      msg: error,
    });
  }
}
