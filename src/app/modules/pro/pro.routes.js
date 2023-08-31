import express from "express";

import { AllProController } from "./pro.controller";
const router = express.Router();
router.get("/", AllProController.getProducts);
router.post("/pro", AllProController.createProduct);

export const AllProRoutes = router;
