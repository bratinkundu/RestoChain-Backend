import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Restaurant } from "./Restaurant";
import { MenuItem } from "./MenuItem";

@Entity()
export class MenuCategory extends BaseEntity {

    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    /** Relationships */
    @ManyToOne(type => Restaurant, restaurant => restaurant.menuCategories)
    restaurant: Restaurant;
  
    @OneToMany(type => MenuItem, menuItem => menuItem.category)
    menuItems: MenuItem[];
}