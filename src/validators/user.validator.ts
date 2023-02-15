import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { emailExists, isRoleValid } from "../helpers/db-validators";
import { validateResult } from "../utils/validator-response";


const validateCreateUser = [
    check('email', 'The emails is not valid').exists().isEmail(), 
    check('email').custom(emailExists),
    check('password', 'The password must have more than 6 characters').isLength({ min: 6}),
    check('rol').custom(isRoleValid),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export { validateCreateUser };