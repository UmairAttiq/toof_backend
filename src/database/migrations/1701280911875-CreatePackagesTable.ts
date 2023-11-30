import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePackagesTable1701280911875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        DROP TABLE IF EXISTS "package";
        DROP SEQUENCE IF EXISTS package_id_seq;
        CREATE SEQUENCE package_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;
        
        CREATE TABLE "public"."packages" (
            "id" integer DEFAULT nextval('package_id_seq') NOT NULL,
            "name" character varying NOT NULL,
            "description" character varying NOT NULL,
            "price" integer NOT NULL,
            "discount" integer,
            "points" character varying NOT NULL,
            "createdAt" timestamp DEFAULT now() NOT NULL,
            "updatedAt" timestamp DEFAULT now() NOT NULL,
            "deletedAt" timestamp,
            CONSTRAINT "package_pk" PRIMARY KEY ("id")
        ) WITH (oids = false);
        
        ALTER TABLE "user" ADD COLUMN packageId INTEGER;

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

