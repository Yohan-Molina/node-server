import { UserI } from "../interfaces/user.interface";
import UserModel from "../models/nosql/user.model";
import { encryptPassword } from "../utils/encrypter";

const createUser = async({ name, email, password, rol }: UserI) => {
    const encryptedPassword = await encryptPassword(password);
    const user = await UserModel.create(
        { name, email, password: encryptedPassword, rol });
    return user;
};

export { createUser };