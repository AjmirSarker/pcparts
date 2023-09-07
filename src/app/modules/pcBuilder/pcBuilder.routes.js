import express from "express";

import { PcBuilderController } from "./pcBuilder.controller";
const router = express.Router();
router
  .post("/", PcBuilderController.createPcBuilder)
  .get("/", PcBuilderController.getAllPcBuilder);

export const PcBuilderRoutes = router;
