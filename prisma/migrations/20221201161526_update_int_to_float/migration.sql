/*
  Warnings:

  - The primary key for the `DataSiswa` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DataSiswa" DROP CONSTRAINT "DataSiswa_pkey",
ALTER COLUMN "nisn" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "no_telp" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "no_telp_ortu" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "DataSiswa_pkey" PRIMARY KEY ("nisn");
