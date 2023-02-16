import { UserI } from "../interfaces/user.interface";
import UserModel from "../models/nosql/user.model";
import { encryptPassword } from "../utils/encrypter";

const createUser = async({ name, email, password, rol }: UserI) => {
    const encryptedPassword = await encryptPassword(password);
    const user = await UserModel.create(
        { name, email, password: encryptedPassword, rol });
    return user;
};

const updateUser = async(id: string, user: any) => {

    const { _id, password, google, email, ...rest} = user;

    if(password) {
        const encryptedPassword = await encryptPassword(password);
        user.password = encryptedPassword; 
    }

    const userUpdate = await UserModel.findByIdAndUpdate(
        { _id: id }, rest, { new: true });
    return userUpdate;

};

const getAllUsers = async (limit: number, from: number) => {

    const state = { state: true };

    /* const users = await UserModel.find(state) 
        .skip(from) 
        .limit(limit); 
        
    const total = await UserModel.countDocuments(state); */

    const [total, users] = await Promise.all([
        UserModel.countDocuments(state), 
        UserModel.find(state)
            .skip(from)
            .limit(limit)
    ])

    return [total, users];
}

const getUserById = async (id: string) => {
    const user = await UserModel.findOne({ _id: id });
    return user;
}

const deleteUserById = async (id: string) => {

    // Lo borramos fisicamente
    // const user = await UserModel.remove({ _id: id });

    const user = await UserModel.findByIdAndUpdate( id, { state: false });
    return user;
}

export { 
    createUser, 
    updateUser, 
    getAllUsers, 
    getUserById, 
    deleteUserById
};