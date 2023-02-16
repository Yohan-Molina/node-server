import { Request, Response } from "express";
import UserModel from "../models/nosql/user.model";
import { 
    createUser, 
    updateUser } from "../services/user.service";
import { encryptPassword } from "../utils/encrypter";

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

const userPut = async({ body, params }: Request, res: Response) => {

    try {
        const { id } = params;
        const user = await updateUser(id, body);
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
    }

/*     const { id } = params;
    const { _id, password, google, email, ...rest} = body;

    // Validar contra la base de datos 
    if(password){
        rest.password = await encryptPassword(password);
    }

    const user = await UserModel.findByIdAndUpdate(id, rest)

    res.status(200).json({
        user
    }); */
}

export { userPost, userPut };