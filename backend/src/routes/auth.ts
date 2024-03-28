import express from "express";
import { loginValidate } from "../middleware/validation";
import { login } from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.post("/login", loginValidate, login);

export default authRoutes;
