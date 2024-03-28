import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Restaurant } from "./Restaurant";

@Entity()
export class User extends BaseEntity{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column() //@Column({ type: "varchar", length: 200, unique: true })
    email: string;

    @Column() //@Column({ nullable: true })
    password: string;

    @Column({default: false})
    active: boolean;

    /** Relationships */
    @OneToMany(() => Restaurant, restaurant => restaurant.user)
    restaurants: Restaurant[];
}