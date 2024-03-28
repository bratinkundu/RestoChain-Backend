import { MigrationInterface, QueryRunner } from "typeorm";

export class MenuCategoryMigrations20240227082236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "menu_category" (
            "id" uuid NOT NULL, 
            "name" character varying NOT NULL, 
            "restaurantId" uuid, 
            CONSTRAINT "PK_246dfbfa0f3b0a4e953f7490544" PRIMARY KEY ("id"))
        `)

        await queryRunner.query(`
            ALTER TABLE "menu_category"
            ADD CONSTRAINT "FK_425e451974d2c2eb39e8f3d39c1" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("menu_category")
    }

}
