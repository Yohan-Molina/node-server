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

export { 
    createUser, 
    updateUser 
};