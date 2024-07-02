import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let res = await prisma.tasks.delete({
      where: {
        taskName_listId: {
          taskName: body.taskName,
          listId: body.listId,
        },
      },
    });
    return NextResponse.json({
      stat: true,
      msg: `Delete Successful`,
    });
  } catch (error) {
    return NextResponse.json({
      stat: false,
      msg: error,
    });
  }
}
