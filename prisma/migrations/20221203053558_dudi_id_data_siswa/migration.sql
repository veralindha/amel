/*
  Warnings:

  - You are about to drop the column `dudiId` on the `DataSiswa` table. All the data in the column will be lost.
  - Added the required column `DudiId` to the `DataSiswa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DataSiswa" DROP CONSTRAINT "DataSiswa_dudiId_fkey";

-- AlterTable
ALTER TABLE "DataSiswa" DROP COLUMN "dudiId",
ADD COLUMN     "DudiId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DataSiswa" ADD CONSTRAINT "DataSiswa_DudiId_fkey" FOREIGN KEY ("DudiId") REFERENCES "Dudi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
