import { Router } from "express";
const router = Router();

import { userPost } from "../controllers/user.controller";

router.post('/', userPost);

export { router };