
/** Interface defining structure of user object */
export interface UserInterface {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
}


/** Interface defining  database operations related to User */
export interface UserRepositoryInterface {
    findAll() : Promise<UserInterface[]>;
    create(user: UserInterface) : Promise<UserInterface | null>; 
    update(id: string, user: UserInterface) : Promise<UserInterface | null>;
    delete(id: string) : Promise<void>;
}