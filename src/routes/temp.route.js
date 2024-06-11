import express from 'express';
import { tempTest } from '../src/controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);