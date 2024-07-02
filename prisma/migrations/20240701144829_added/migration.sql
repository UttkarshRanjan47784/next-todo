/*
  Warnings:

  - A unique constraint covering the columns `[taskName,listId]` on the table `Tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Tasks_taskName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_taskName_listId_key" ON "Tasks"("taskName", "listId");
