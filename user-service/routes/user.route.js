import { Router } from "express";
import { notifyUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/notify").post(notifyUser);

export default router;
