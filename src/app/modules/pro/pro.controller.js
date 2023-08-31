import { AllProService } from "./pro.service";

const getProducts = async (req, res) => {
  const products = await AllProService.getProducts();
  res.send(products);
};
const createProduct = async  (req, res) => {
    const product = await AllProService.createProducts(req.body);
    res.send(product);  
}

export const AllProController = {
  getProducts,createProduct
};
