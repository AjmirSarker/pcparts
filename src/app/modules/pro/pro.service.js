import { pro } from "./pro.model";

const getProducts = async () => {
  const products = await pro.find({});
  return { data: products };
};
const createProducts = async (payload) => {
  console.log(payload);
  const products = await pro.create(payload);
  return { data: products };
};

export const AllProService = { getProducts, createProducts };
