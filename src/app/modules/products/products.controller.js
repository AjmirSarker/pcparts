import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { mergedObjectFields, productFilterFields } from "./products.constans";
import { AllProductsService } from "./products.service";
import httpStatus from "http-status";

const getProducts = catchAsync(async (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    const filterObj = mergedObjectFields(req.query);
    const products = await AllProductsService.getProducts(req.query, filterObj);
    res.status(200).send(products);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product fetched successfully !",
      data: products,
    });
  } else {
    const products = await AllProductsService.getProducts();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products fetched successfully !",
      data: products,
    });
  }
});
const getProductsByModel = catchAsync(async (req, res) => {
  const byModel = await AllProductsService.getProductByModel(req.params.model);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Model fetched successfully !",
    data: byModel,
  });
});
const getProductsByCategory = catchAsync(async (req, res) => {
  const byCategory = await AllProductsService.getProductByCategory(req.params.category);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products fetched successfully !",
    data: byCategory,
  });
});
const insertManyProducts = catchAsync(async (req, res) => {
  const products = await AllProductsService.insertManyProducts(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products inserted Successfully !",
    data: products,
  });
});
const deleteProducts = catchAsync(async (req, res) => {
  const products = await AllProductsService.deleteProducts(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted Successfully !",
    data: products,
  });
});
const getRandomProducts = catchAsync(async (req, res) => {
  const products = await AllProductsService.getRandomProducts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products fetched successfully !",
    data: products,
  });
});
const getProductById =catchAsync(async (req, res) => {
  const product = await AllProductsService.getProductById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully !",
    data: product,
  });
})

export const AllProductsController = {
  getProducts,
  getProductsByModel,
  insertManyProducts,
  deleteProducts,
  getRandomProducts,
  getProductById,
  getProductsByCategory
};
