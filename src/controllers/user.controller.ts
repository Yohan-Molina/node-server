import { Request, Response } from "express";
import { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser } from "../services/user.service";

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

const usersGet = async ({ query }: Request, res: Response) => {

    const { limit = 5, from = 0 } = query;

    try {
        const [total, users] = await getAllUsers(Number(limit), Number(from));
        res.json({total, users})
    } catch (e) {
        console.log(e);
    }
}

const userGetById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const user = await getUserById(id);
        res.send(user)
    } catch (e) {
        console.log(e);
    }
}

export { userPost, userPut, usersGet, userGetById };