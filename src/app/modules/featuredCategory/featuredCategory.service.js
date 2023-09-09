import { Category } from "./featuredCategory.model";

const getAllCategory = async () => {
  const result = await Category.find();
  return result;
};
export const CategoryService= {getAllCategory}
