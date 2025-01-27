import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await prisma.tasks.create({ data: body });
    return NextResponse.json({
      stat: true,
      msg: `Task added successfully`,
    });
  } catch (error) {
    return NextResponse.json({
      stat: false,
      msg: error,
    });
  }
}
