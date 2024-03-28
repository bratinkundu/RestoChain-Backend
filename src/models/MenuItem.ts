import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Restaurant } from "./Restaurant";
import { MenuCategory } from "./MenuCategory";

@Entity()
export class MenuItem extends BaseEntity {
    @PrimaryColumn('uuid')
    id : string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal', {precision: 2, scale: 2})
    price: number;

    /** Relationships */
    @ManyToOne(type => Restaurant, restaurant => restaurant.menuCategories)
    restaurant: Restaurant;

    @ManyToOne(type => MenuCategory, menuCategory => menuCategory.menuItems)
    category: MenuCategory;
}