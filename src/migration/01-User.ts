import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration20240227082234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL, 
                "firstName" character varying NOT NULL, 
                "lastName" character varying NOT NULL, 
                "email" character varying NOT NULL, 
                "password" character varying NOT NULL, 
                "active" boolean NOT NULL DEFAULT false, 
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
