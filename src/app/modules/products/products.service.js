import { Product } from "./products.model";

const getProducts = async () => {
  const products = await Product.find({});
  return { data: products };
};

export const AllProductsService = { getProducts };
