import { fetchRelatedProducts } from "@/app/lib/data";

export default async function handler(req, res) {
  const { category, excludeProductId } = req.query;
  const relatedProducts = await fetchRelatedProducts(
    category,
    excludeProductId
  );
  res.status(200).json(relatedProducts);
}
