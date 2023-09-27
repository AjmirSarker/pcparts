import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { PcBuilderService } from "./pcBuilder.service.js";

const createPcBuilder = catchAsync(async (req, res) => {
  const result = await PcBuilderService.createPcBuilder(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Build Order Created successfully !",
    data: result,
  });
});
const getAllPcBuilder = catchAsync(async (req, res) => {
  const result = await PcBuilderService.getAllPcBuilder();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order fetched successfully !",
    data: result,
  });
});

export const PcBuilderController = { createPcBuilder, getAllPcBuilder };
