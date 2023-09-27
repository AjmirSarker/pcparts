import { Product } from "./products.model.js";

const getProducts = async (infos = {}, filterObj = {}) => {
  console.log("info product service", infos);
  console.log("filterObj product service", filterObj);

  let SortOrder = infos?.sortOrder || 1;

  let SortBy = infos?.sortBy || "Price";

  let Limit = infos?.limit || 300;

  let skip = (infos?.page - 1) * Limit;

  const sortCondition = { [SortBy]: SortOrder };

  if (Object.keys(filterObj).length === 0) {
    const products = await Product.find({})
      .sort(sortCondition)
      .skip(skip)
      .limit(Limit);
    console.log(products.length);
    const totalProducts = await Product.countDocuments();
    return { products, totalProducts };
  } else {
    const products = await Product.find(filterObj)
      .sort(sortCondition)
      .skip(skip)
      .limit(Limit);
    const totalProducts = await Product.countDocuments(filterObj);
    console.log(products.length);
    return { products, totalProducts };
  }
};
const getProductByModel = async (Model) => {
  try {
    const byModel = await Product.find({
      Model: { $regex: Model, $options: "i" },
    });

    return byModel;
  } catch {
    return { error: "error" };
  }
};
const getProductByCategory = async (Category) => {
  try {
    const byCategory = await Product.find({
      Category: { $regex: Category, $options: "i" },
    });

    return  byCategory;
  } catch {
    return { error: "error" };
  }
};
const getProductById = async (id) => {
  try {
    const byId = await Product.findById(id);

    return byId;
  } catch {
    return { error: "error" };
  }
}
const getRandomProducts = async () => {
  const products = await Product.aggregate([{ $sample: { size: 12 } }]);
  
  return products;
};
const insertManyProducts = async (Products) => {
  const newProducts = await Product.insertMany(Products);

  return newProducts;
};

const deleteProducts = async (id) => {
  //  await Product.find({})
  //   .sort({ _id: -1 }) // Sort by _id in descending order to get the last five
  //   .limit(5) // Limit the result to the last five documents
  //   .then((documents) => {
  //     // Delete the last five documents
  //     return Product.deleteMany({ _id: { $in: documents.map(doc => doc._id) } });
  //   })
  //   .then(() => {
  //     console.log('Last five documents deleted successfully.');
  //   })
  //   .catch((err) => {
  //     throw new ApiError(404, err.message);
  //   });
  const product = await Product.deleteOne({ _id: id });
  if (!product) {
    throw new ApiError(404, "Failed to delete student");
  }
  return product;
};

export const AllProductsService = {
  getProducts,
  getProductByModel,
  insertManyProducts,
  deleteProducts,
  getRandomProducts,
  getProductById,
  getProductByCategory
};

//http://localhost:8080/api/v1/products?category=Keyboard&sortOrder=1&limit=5&sortBy=ProductId&page=1
//{Category :"Keyboard", Status :"Out of Stock"}
//http://localhost:9999/api/v1/products?Category=Mouse&limit=20&sortBy=ProductId&Status=In%20Stock
//  if (!student) {
//   throw new ApiError(404, 'Failed to delete student');
// }

// const filter = { name: 'Will Riker' };
// const update = { age: 29 };

// await Character.countDocuments(filter); // 0

// const doc = await Character.findOneAndUpdate(filter, update, {
//   new: true,
//   upsert: true // Make this update into an upsert
// });
// doc.name; // Will Riker
// doc.age; // 29
