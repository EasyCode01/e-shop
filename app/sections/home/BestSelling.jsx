import ShuffledProducts from "@/app/components/product/ShuffledProducts";

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/e-shop-54bbf.appspot.com/o/e-shop-images%2Famazon-echo.png?alt=media&token=c8b93545-8300-4b21-bfc1-d4b9b66dfaeb";

export default function BestSelling({ products }) {
  const bestSellingProducts = products
    .filter((product) => product.categoryType === "Best selling products")
    .map((product) => {
      console.log(defaultImageUrl);
      return {
        ...product,
        images: product.images || defaultImageUrl,
      };
    });

  return (
    <div className="pt-12 flex flex-col gap-2">
      <div className="">
        <small className="text-xxs font-bold text-red pl-5 title relative">
          This Month
        </small>
      </div>

      <div className="flex justify-between ">
        <div className="flex items-center gap-10">
          <h1 className="md:text-2xl text-xl font-bold">
            Best Selling Products
          </h1>
        </div>
        <button className="btn-primary">View All</button>
      </div>

      <div className="pb-10 mt-10 w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          <ShuffledProducts
            initialProducts={bestSellingProducts}
            type="Best selling products"
          />
        </div>
      </div>
    </div>
  );
}
