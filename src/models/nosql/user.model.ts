import { Schema, model } from 'mongoose';
import { UserI } from '../../interfaces/user.interface';

const UserSchema = new Schema<UserI>(
    {
        name: {
            type: String, 
            required: [true, 'The name is required']
        },
        email: {
            type: String, 
            required: [true, 'The name is required'],
            unique: true 
        },
        password: {
            type: String, 
            required: [true, 'Password is required']
        },
        img: {
            type: String
        },
        rol: {
            type: String, 
            required: true, 
            enum: ['ADMIN_ROLE', 'USER_ROLE']
        },
        state: {
            type: Boolean,
            default: true
        },
        google: {
            type: Boolean, 
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;