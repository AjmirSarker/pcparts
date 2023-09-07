import express from "express";
import { AllProductsController } from "./products.controller";
const router = express.Router();
router.get("/", AllProductsController.getProducts);
router.post("/", AllProductsController.insertManyProducts);
router.get("/:model", AllProductsController.getProductsByModel);

export const AllProductsRoutes = router;
