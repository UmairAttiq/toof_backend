import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateStoreTable1701280805484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        DROP TABLE IF EXISTS "store";
        DROP SEQUENCE IF EXISTS store_id_seq;
        CREATE SEQUENCE store_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;
        
        CREATE TABLE "public"."store" (
            "id" integer DEFAULT nextval('store_id_seq') NOT NULL,
            "name" character varying NOT NULL,
            "address" character varying NOT NULL,
            "city" character varying NOT NULL,
            "zip_code" character varying NOT NULL,
            "phone_number" character varying NOT NULL,
            "photo" character varying,
            "createdAt" timestamp DEFAULT now() NOT NULL,
            "updatedAt" timestamp DEFAULT now() NOT NULL,
            "deletedAt" timestamp,
            "userId" integer,
            CONSTRAINT "store_pk" PRIMARY KEY ("id")
        ) WITH (oids = false);
        
        ALTER TABLE ONLY "public"."store" ADD CONSTRAINT "store_user_FK" FOREIGN KEY ("userId") REFERENCES "user"(id) NOT DEFERRABLE;
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
