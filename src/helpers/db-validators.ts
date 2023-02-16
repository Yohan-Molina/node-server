import RoleModel from "../models/nosql/role.model";
import UserModel from "../models/nosql/user.model";

const isRoleValid = async(rol='') => {
    const existRol= await RoleModel.findOne({ rol });
    if( !existRol ) {
        throw new Error(`The rol ${rol} is not registered`)
    }; 
};

const emailExists = async(email = '') => {
    const existEmail = await UserModel.findOne({ email });
    if( existEmail ) {
        throw new Error(`The email ${email} is already registered`)
    }; 
};

const userExistsById = async(id: number) => {
    const existUser = await UserModel.findById({ _id: id });
    if( !existUser ) {
        throw new Error(`The id ${id} does not exist`)
    }; 
};

export { 
    isRoleValid,
    emailExists, 
    userExistsById
};