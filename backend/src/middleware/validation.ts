import { check } from "express-validator";

const registerUserValidate = [
  check("firstName", "First name is required").isString(),
  check("lastName", "Last name is required").isString(),
  check("email", "Email is required").isEmail().withMessage("Invalid Email"),
  check("password", "Password is required").isLength({
    min: 8,
  }),
];

const loginValidate = [
  check("email", "Email is required").isEmail().withMessage("Invalid Email"),
  check("password", "Password is required").isLength({
    min: 8,
  }),
];

export { registerUserValidate, loginValidate };
