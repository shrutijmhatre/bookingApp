import express from "express";
import { registerUsers } from "../controllers/userController";
import { registerUserValidate } from "../middleware/validation";

const userRoutes = express.Router();

// POST /api/users/register
userRoutes.post("/register", registerUserValidate, registerUsers);

export default userRoutes;
