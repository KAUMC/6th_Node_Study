import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.comtroller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));