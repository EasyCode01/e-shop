import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchProducts = async () => {
  try {
    await connectToDB();
    const products = await Product.find().lean();
    console.log(products);
    const serializedProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));
    return serializedProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};
