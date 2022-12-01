-- CreateTable
CREATE TABLE "DataSiswa" (
    "nisn" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "bidang" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_telp" INTEGER NOT NULL,
    "ttl" TEXT NOT NULL,
    "nama_ortu" TEXT NOT NULL,
    "no_telp_ortu" INTEGER NOT NULL,

    CONSTRAINT "DataSiswa_pkey" PRIMARY KEY ("nisn")
);

-- CreateTable
CREATE TABLE "DataGuru" (
    "nip" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_telp" INTEGER NOT NULL,

    CONSTRAINT "DataGuru_pkey" PRIMARY KEY ("nip")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dudi" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "dudi" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_telp" INTEGER NOT NULL,

    CONSTRAINT "Dudi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogSiswa" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "kegiatan" TEXT NOT NULL,
    "dudiId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LogSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogGuru" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "kegiatan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LogGuru_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LogSiswa" ADD CONSTRAINT "LogSiswa_dudiId_fkey" FOREIGN KEY ("dudiId") REFERENCES "Dudi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
