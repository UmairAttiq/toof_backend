import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateStoreScheduleTable1701280865393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        DROP TABLE IF EXISTS "schedule";
        DROP SEQUENCE IF EXISTS schedule_id_seq;
        CREATE SEQUENCE schedule_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;
        
        CREATE TABLE "public"."schedule" (
            "id" integer DEFAULT nextval('schedule_id_seq') NOT NULL,
            "day" character varying NOT NULL,
            "time_slot" character varying NOT NULL,
            "createdAt" timestamp DEFAULT now() NOT NULL,
            "updatedAt" timestamp DEFAULT now() NOT NULL,
            "deletedAt" timestamp,
            "userId" integer,
            "storeId" integer,
            CONSTRAINT "schedule_pk" PRIMARY KEY ("id")
        ) WITH (oids = false);
        
        ALTER TABLE ONLY "public"."schedule" ADD CONSTRAINT "schedule_user_FK" FOREIGN KEY ("userId") REFERENCES "user"(id) NOT DEFERRABLE;
        ALTER TABLE ONLY "public"."schedule" ADD CONSTRAINT "schedule_store_FK" FOREIGN KEY ("storeId") REFERENCES "store"(id) NOT DEFERRABLE;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
