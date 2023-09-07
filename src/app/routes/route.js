import express from "express";
import { AllProductsRoutes } from "../modules/products/products.routes.js";
import path from "path";
import { PcBuilderRoutes } from "../modules/pcBuilder/pcBuilder.routes.js";

// const AllProductsRoutes = require("../modules/products/products.routes");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: AllProductsRoutes,
  },
  {
    path: "/pcbuilder",
    route: PcBuilderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
