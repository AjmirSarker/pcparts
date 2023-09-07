import { mergedObjectFields, productFilterFields } from "./products.constans";
import { AllProductsService } from "./products.service";

const getProducts = async (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    const filterObj = mergedObjectFields(req.query);
    const products = await AllProductsService.getProducts(req.query, filterObj);
    res.status(200).send(products);
  } else {
    const products = await AllProductsService.getProducts();
    res.send(products);
  }
};
const getProductsByModel = async (req, res) => {
  const byModel = await AllProductsService.getProductByModel(req.params.model);
  res.send(byModel);
};
const insertManyProducts = async (req, res) => {
  const products = await AllProductsService.insertManyProducts(req.body);
  res.send(products);
};

export const AllProductsController = {
  getProducts,
  getProductsByModel,
  insertManyProducts,
};
