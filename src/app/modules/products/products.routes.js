import express from "express";
import { AllProductsController } from "./products.controller";
const router = express.Router();
router.get("/", AllProductsController.getProducts);

export const AllProductsRoutes = router;
