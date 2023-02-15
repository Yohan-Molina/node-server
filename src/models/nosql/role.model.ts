import { Schema, model } from 'mongoose';
import { RoleI } from '../../interfaces/role.interface';

const RoleSchema = new Schema<RoleI>(
    {
        rol: {
            type: String, 
            required: [true, 'The rol is required']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const RoleModel = model("roles", RoleSchema);
export default RoleModel;