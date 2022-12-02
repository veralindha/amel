-- AlterTable
CREATE SEQUENCE dudi_id_seq;
ALTER TABLE "Dudi" ALTER COLUMN "id" SET DEFAULT nextval('dudi_id_seq');
ALTER SEQUENCE dudi_id_seq OWNED BY "Dudi"."id";
