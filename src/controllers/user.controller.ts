import { Request, Response } from "express";
import UserModel from "../models/nosql/user.model";

const userPost = async({ body }: Request, res: Response) => {

    const { name, email, password, rol } = body;
    const user = new UserModel({ name, email, password, rol });

    await user.save()
    res.status(201).json({ user })
}; 

export { userPost };