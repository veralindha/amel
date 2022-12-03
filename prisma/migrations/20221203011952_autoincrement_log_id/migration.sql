-- AlterTable
CREATE SEQUENCE logguru_id_seq;
ALTER TABLE "LogGuru" ALTER COLUMN "id" SET DEFAULT nextval('logguru_id_seq');
ALTER SEQUENCE logguru_id_seq OWNED BY "LogGuru"."id";

-- AlterTable
CREATE SEQUENCE logsiswa_id_seq;
ALTER TABLE "LogSiswa" ALTER COLUMN "id" SET DEFAULT nextval('logsiswa_id_seq');
ALTER SEQUENCE logsiswa_id_seq OWNED BY "LogSiswa"."id";
