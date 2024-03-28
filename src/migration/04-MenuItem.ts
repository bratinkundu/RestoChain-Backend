import { MigrationInterface, QueryRunner } from "typeorm";

export class MenuItemsMigration20240227082237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "menu_items" (
                "id" uuid NOT NULL, 
                "name" character varying NOT NULL, 
                "description" character varying NOT NULL, 
                "price" numeric(2,2) NOT NULL, 
                "restaurantId" uuid, 
                "categoryId" uuid, 
                CONSTRAINT "PK_722c4de0accbbfafc77947a8556" PRIMARY KEY ("id"))
        `)

        await queryRunner.query(`
            ALTER TABLE "menu_items"
            ADD CONSTRAINT "FK_425e451974d2c2eb39e8f3d39c2" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);

        await queryRunner.query(`
            ALTER TABLE "menu_items"
            ADD CONSTRAINT "FK_425e451974d2c2eb39e8f3d39c3" FOREIGN KEY ("categoryId") REFERENCES "menu_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("menu_items")
    }

}
