import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await prisma.list.delete({
      where: { listName: body.listName },
    });
    return NextResponse.json({
      stat: true,
      msg: `List deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json({
      stat: false,
      msg: error,
    });
  }
}
