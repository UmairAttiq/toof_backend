import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePaymentTable1701280949161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        DROP TABLE IF EXISTS "payment";
        DROP SEQUENCE IF EXISTS payment_id_seq;
        CREATE SEQUENCE payment_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;
        
        CREATE TABLE "public"."payment" (
            "id" integer DEFAULT nextval('payment_id_seq') NOT NULL,
            "card_number" character varying NOT NULL,
            "expiration_date" character varying NOT NULL,
            "cvc" integer NOT NULL,
            "name" character varying NOT NULL,
            "address" character varying NOT NULL,
            "city" character varying NOT NULL,
            "zip_code" integer NOT NULL,
            "createdAt" timestamp DEFAULT now() NOT NULL,
            "updatedAt" timestamp DEFAULT now() NOT NULL,
            "deletedAt" timestamp,
            "userId" integer,
            CONSTRAINT "payment_pk" PRIMARY KEY ("id")
        ) WITH (oids = false);
        
        ALTER TABLE ONLY "public"."payment" ADD CONSTRAINT "payment_user_FK" FOREIGN KEY ("userId") REFERENCES "user"(id) NOT DEFERRABLE;
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
