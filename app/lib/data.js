import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchProducts = async () => {
  try {
    await connectToDB();
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};
