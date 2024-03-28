import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { MenuCategory } from "./MenuCategory";

@Entity()
export class Restaurant extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;
    
    /** Relationship */
    @ManyToOne(type => User, user => user.restaurants)
    user : User;

    @OneToMany(type => MenuCategory, menuCategory => menuCategory.restaurant)
    menuCategories: MenuCategory[];
}