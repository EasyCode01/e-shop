import { fetchProducts } from "../lib/data";

export default async function Products() {
  const products = await fetchProducts();

  console.log(products);

  return <div className="pt-28">Products</div>;
}
