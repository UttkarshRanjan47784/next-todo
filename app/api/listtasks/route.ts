import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let res = await prisma.list.findUniqueOrThrow({
      where: { listName: body.listName },
      select: { tasks: { select: { taskName: true, taskStatus: true } } },
    });
    return NextResponse.json({
      stat: true,
      msg: res,
    });
  } catch (error) {
    return NextResponse.json({
      stat: false,
      msg: error,
    });
  }
}
