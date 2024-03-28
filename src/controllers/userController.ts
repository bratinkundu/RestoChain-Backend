import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import UserRepository from '../repositories/UserRepository';
/** Handles the HTTP calls and will only interact with Services */
/** Dependency Injection */
const userRepository = new UserRepository()
const userService = new UserServices(userRepository);


export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body)
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};


export const getUserData = async (req: Request, res: Response) => {
  try {
    console.log("Inside the GET");
    res.send({data: "Here is data"});
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
}