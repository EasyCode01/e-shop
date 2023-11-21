import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchProducts = async () => {
  try {
    await connectToDB();
    const products = await Product.find().lean();
    return products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products!", error);
    return null;
  }
};

export const fetchProductById = async (productId) => {
  try {
    await connectToDB();
    const product = await Product.findById(productId).lean();

    if (!product) {
      console.log(`No product found with ID: ${productId}`);
      return null;
    }

    return {
      ...product,
      _id: product._id.toString(),
    };
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const fetchRelatedProducts = async ({ category, excludeProductId }) => {
  try {
    await connectToDB();

    const relatedItems = await Product.find({
      category: category,
      _id: { $ne: excludeProductId },
    }).lean();

    return relatedItems.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching related products:", error);
    return null;
  }
};
