-- CreateTable
CREATE TABLE "List" (
    "listName" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("listName")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "taskId" SERIAL NOT NULL,
    "listId" TEXT NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskStatus" BOOLEAN NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("taskId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_taskName_key" ON "Tasks"("taskName");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("listName") ON DELETE RESTRICT ON UPDATE CASCADE;
