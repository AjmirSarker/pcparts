import express from "express";
import { CategoryController } from "./featuredCategory.controller";
const router = express.Router();
router.get("/", CategoryController.getAllCategory);

export const CategoryRouter = router;
