import { Router } from "express";
const router = Router();

// Controllers
import { 
    userGetById, 
    userPost, 
    userPut, 
    usersGet } from "../controllers/user.controller";

// Validators
import { 
    validateCreateUser, 
    validateUpdateUser } from "../validators/user.validator";

router.get('/', usersGet);
router.get('/:id', userGetById);
router.post('/', validateCreateUser, userPost);
router.put('/:id', validateUpdateUser, userPut);

export { router };