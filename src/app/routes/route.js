import express from "express";
import { AllProductsRoutes } from "../modules/products/products.routes.js";
import { AllProRoutes } from "../modules/pro/pro.routes.js";
// const AllProductsRoutes = require("../modules/products/products.routes");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: AllProductsRoutes,
  },
  {
    path: "/pro",
    route: AllProRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
