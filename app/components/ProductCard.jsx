"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProductCard({ product }) {
  return (
    <div className="product-card flex flex-col gap-4 cursor-pointer shadow-lg">
      <div className="w-full bg-gray h-60 flex justify-center items-center relative rounded-sm">
        <div className="w-[90%] md:w-3/5">
          <img
            className="h-[160px] w-full object-cover"
            src={product.img}
            alt={product.name}
          />
        </div>

        {product.isNew ? (
          <div className="absolute top-3 left-3 text-white bg-lemon px-2 py-1 rounded-sm flex justify-center items-center">
            New
          </div>
        ) : null}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <div className="w-[20px] h-[20px] flex justify-center items-center bg-white rounded-full">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="w-[20px] h-[20px] flex justify-center items-center bg-white rounded-full">
            <VisibilityOutlinedIcon />
          </div>
        </div>

        <div className="w-full hidden absolute bottom-0 product-btn">
          <button className="btn-dark w-full"> Add To cart</button>
        </div>
      </div>

      <div className="p-2">
        <p>{product.name}</p>
        <div className="flex gap-2 flex-wrap">
          <p className="text-red">${product.price}</p>
          <div>
            {[...Array(5)].map((_, index) =>
              product.rating > index ? (
                <StarIcon key={index} className="text-orange" />
              ) : (
                <StarBorderIcon key={index} className="text-deep-gray" />
              )
            )}
          </div>
          <p>{product.numberOfProduct}</p>
        </div>
      </div>

      <div className="flex gap-2 p-2">
        <div className="w-[15px] h-[15px] rounded-full bg-red p-2 border-2 border-dark border-solid"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-dark p-2 border-2 border-dark border-solid"></div>
      </div>
    </div>
  );
}
