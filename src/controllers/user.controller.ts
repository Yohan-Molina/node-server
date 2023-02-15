import { Request, Response } from "express";
import { createUser } from "../services/user.service";

const userPost = async({ body }: Request, res: Response) => {

    try {
        const user = await createUser(body);
        res.status(201).send({
            success: true,
            message: 'User created successfully',
            user
        })
    } catch (error) {
        console.log('Error creating user: ', error); 
        res.status(400).send({
            success: false, 
            message: 'Error creating user',
            error
        });
    }
}; 

export { userPost };