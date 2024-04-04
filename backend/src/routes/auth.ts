import express, { Request, Response } from "express";
import { loginValidate } from "../middleware/validation";
import { login } from "../controllers/authController";
import verifyToken from "../middleware/auth";

const authRoutes = express.Router();

authRoutes.post("/login", loginValidate, login);

authRoutes.get(
  "/validate-token",
  verifyToken,
  (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
  },
);

export default authRoutes;
