-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_listId_fkey";

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("listName") ON DELETE CASCADE ON UPDATE CASCADE;
