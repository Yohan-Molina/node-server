import { Router } from "express";
const router = Router();

import { userPost, userPut } from "../controllers/user.controller";
import { validateCreateUser, validateUpdateUser } from "../validators/user.validator";

router.post('/', validateCreateUser, userPost);
router.put('/:id', validateUpdateUser, userPut);

export { router };