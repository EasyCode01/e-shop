import ProductCard from "@/app/components/ProductCard";
import { productsData } from "@/app/constant/data";

export default function WishList() {
  const whislistProducts = productsData.slice(4, 8);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>Wishlist (4)</h3>
        <button className="btn-outline">Move All to bag</button>
      </div>

      <div className="mt-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {whislistProducts.length > 0 ? (
            whislistProducts.map((product, index) => (
              <ProductCard key={index} product={product} type="wishlist" />
            ))
          ) : (
            <div>WhishList is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}
