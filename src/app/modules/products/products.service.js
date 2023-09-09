import { Product } from "./products.model";

const getProducts = async (infos = {}, filterObj = {}) => {
  console.log("info product service", infos);
  console.log("filterObj product service", filterObj);

  let SortOrder = infos?.sortOrder || 1;

  let SortBy = infos?.sortBy || "Price";

  let Limit = infos?.limit || 240;

  let skip = (infos?.page - 1) * Limit;

  const sortCondition = { [SortBy]: SortOrder };

  if (Object.keys(filterObj).length === 0) {
    const products = await Product.find({})
      .sort(sortCondition)
      .skip(skip)
      .limit(Limit);
    console.log(products.length);
    const totalProducts = await Product.countDocuments();
    return { data: products, totalProducts };
  } else {
    const products = await Product.find(filterObj)
      .sort(sortCondition)
      .skip(skip)
      .limit(Limit);
    const totalProducts = await Product.countDocuments(filterObj);
    console.log(products.length);
    return { data: products, totalProducts };
  }
};
const getProductByModel = async (Model) => {

  const byModel = await Product.find({
    Model: { $regex: Model, $options: "i" },
  });

  return { data: byModel };



};
const insertManyProducts = async (Products) => {
  const newProducts = await Product.insertMany(Products);
  return newProducts;
};

export const AllProductsService = {
  getProducts,
  getProductByModel,
  insertManyProducts,
};

//http://localhost:8080/api/v1/products?category=Keyboard&sortOrder=1&limit=5&sortBy=ProductId&page=1
//{Category :"Keyboard", Status :"Out of Stock"}
//http://localhost:9999/api/v1/products?Category=Mouse&limit=20&sortBy=ProductId&Status=In%20Stock
