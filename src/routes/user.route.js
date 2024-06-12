import express from "express";
import { userSignin } from "../controllers/user.comtroller.js";

export const userRouter = express.Router();

userRouter.post('/signin', userSignin);