import { Router } from "express";
const router = Router();

import { userPost } from "../controllers/user.controller";
import { validateCreateUser } from "../validators/user.validator";

router.post('/', validateCreateUser, userPost);

export { router };