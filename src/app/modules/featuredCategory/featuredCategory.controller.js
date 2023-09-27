import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { CategoryService } from "./featuredCategory.service.js";

const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category Fetched Successfully !",
    data: result,
  });
});
export const CategoryController = { getAllCategory };
