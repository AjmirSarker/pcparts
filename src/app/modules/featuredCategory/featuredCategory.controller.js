import catchAsync from "../../../shared/catchAsync";
import { CategoryService } from "./featuredCategory.service";

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
