import {
  fetchProducts,
  fetchProductById,
  fetchRelatedProducts,
} from "@/app/lib/data";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  console.log("search params is:", searchParams);

  // Fetch product by ID
  if (searchParams.has("id")) {
    const id = searchParams.get("id");
    const product = await fetchProductById(id);
    return new Response(JSON.stringify(product), { status: 200 });
  }

  // Fetch related products
  if (searchParams.has("category")) {
    const category = searchParams.get("category");
    const excludeProductId = searchParams.get("excludeProductId");
    const relatedProducts = await fetchRelatedProducts(
      category,
      excludeProductId
    );
    console.log("I just fetched related products:", relatedProducts);
    return new Response(JSON.stringify(relatedProducts), { status: 200 });
  }

  // Default case: Fetch all products
  const products = await fetchProducts();
  // console.log("I just fetched:", products);
  return new Response(JSON.stringify(products), { status: 200 });
}
