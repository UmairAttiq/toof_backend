import { MigrationInterface, QueryRunner } from "typeorm"

export class AddConstraintInUserTable1701283441438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ONLY "public"."user" ADD CONSTRAINT "user_package_FK" FOREIGN KEY ("packageid") REFERENCES "packages"(id) NOT DEFERRABLE;')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
