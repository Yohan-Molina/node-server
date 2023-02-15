import { genSaltSync, hashSync } from "bcryptjs";

const encryptPassword = async(password: string): Promise<string> => {
    const saltRounds = genSaltSync();
    const hashedPassword = await hashSync(password, saltRounds);
    return hashedPassword;
}

export { encryptPassword };