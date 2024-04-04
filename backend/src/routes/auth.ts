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

authRoutes.post("/logout", (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
});

export default authRoutes;
