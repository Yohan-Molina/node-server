import RoleModel from "../models/nosql/role.model";
import UserModel from "../models/nosql/user.model";

const isRoleValid = async(rol='') => {
    const existRol= await UserModel.findOne({ rol });
    if( !existRol ) {
        throw new Error(`The rol ${rol} is not registered`)
    }; 
};

const emailExists = async(email = '') => {
    const existEmail = await RoleModel.findOne({ email });
    if( existEmail ) {
        throw new Error(`The email ${email} is already registered`)
    }; 
};

export { 
    isRoleValid,
    emailExists 
};