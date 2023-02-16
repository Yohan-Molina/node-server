import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { emailExists, isRoleValid, userExistsById } from "../helpers/db-validators";
import { validateResult } from "../utils/validator-response";


const validateCreateUser = [
    check('name', 'The name is required field').exists(),
    check('email', 'The emails is not valid').isEmail(), 
    check('email').custom(emailExists),
    check('password', 'The password must have more than 6 characters').isLength({ min: 6}),
    check('rol').custom(isRoleValid),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

const validateUpdateUser = [
    check('id', 'Not a valid identifier, please enter a valid ID').isMongoId(),
    check('id').custom(userExistsById),
    check('rol').custom(isRoleValid),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
]

export { 
    validateCreateUser, 
    validateUpdateUser
};