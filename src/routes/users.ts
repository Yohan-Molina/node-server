import { Router } from "express";
const router = Router();

// Controllers
import { 
    deleteUser,
    userGetById, 
    userPost, 
    userPut, 
    usersGet } from "../controllers/user.controller";

// Validators
import { 
    validateCreateUser, 
    validateDeleteUser, 
    validateUpdateUser } from "../validators/user.validator";

router.get('/', usersGet);
router.get('/:id', userGetById);
router.post('/', validateCreateUser, userPost);
router.put('/:id', validateUpdateUser, userPut);
router.delete('/:id', validateDeleteUser, deleteUser)

export { router };