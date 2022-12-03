/*
  Warnings:

  - Added the required column `dudiId` to the `DataSiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataSiswa" ADD COLUMN     "dudiId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DataSiswa" ADD CONSTRAINT "DataSiswa_dudiId_fkey" FOREIGN KEY ("dudiId") REFERENCES "Dudi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
