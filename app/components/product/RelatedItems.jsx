import React from "react";
import ProductCard from "../ProductCard";

export default async function RelatedItems({ relatedItems }) {
  if (!relatedItems) {
    return <div>There are no related products...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {relatedItems.slice(0, 4).map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          type="Best selling products"
        />
      ))}
    </div>
  );
}
