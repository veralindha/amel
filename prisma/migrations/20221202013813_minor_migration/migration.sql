/*
  Warnings:

  - You are about to drop the column `nama` on the `DataGuru` table. All the data in the column will be lost.
  - You are about to drop the column `bidang` on the `DataSiswa` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `DataSiswa` table. All the data in the column will be lost.
  - You are about to drop the column `dudi` on the `Dudi` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Dudi` table. All the data in the column will be lost.
  - Added the required column `nama_guru` to the `DataGuru` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_siswa` to the `DataSiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_dudi` to the `Dudi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataGuru" DROP COLUMN "nama",
ADD COLUMN     "nama_guru" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DataSiswa" DROP COLUMN "bidang",
DROP COLUMN "nama",
ADD COLUMN     "nama_siswa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Dudi" DROP COLUMN "dudi",
DROP COLUMN "nama",
ADD COLUMN     "nama_dudi" TEXT NOT NULL;
