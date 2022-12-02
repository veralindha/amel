/*
  Warnings:

  - The primary key for the `DataGuru` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DataGuru" DROP CONSTRAINT "DataGuru_pkey",
ALTER COLUMN "nip" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "DataGuru_pkey" PRIMARY KEY ("nip");
