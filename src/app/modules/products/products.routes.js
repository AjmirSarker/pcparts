import express from "express";
import { AllProductsController } from "./products.controller";
const router = express.Router();
router.get("/", AllProductsController.getProducts);
router.post("/", AllProductsController.insertManyProducts);
router.get("/random", AllProductsController.getRandomProducts);
router.get("/id/:id", AllProductsController.getProductById);
router.get("/category/:category", AllProductsController.getProductsByCategory);
router.get("/:model", AllProductsController.getProductsByModel);


export const AllProductsRoutes = router;
