import express from "express";
import { CategoryController } from "./featuredCategory.controller.js";
const router = express.Router();
router.get("/", CategoryController.getAllCategory);

export const CategoryRouter = router;
