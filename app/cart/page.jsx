import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CouponForm from "../components/cart/CouponForm";
import { productsData } from "../constant/data";
export default function Page({ handleApplyCoupon }) {
  return (
    <div className="container mx-auto py-8">
      <div className="hidden md:grid grid-cols-4 items-center mb-4 p-8 bg-white shadow-md ">
        <div className="font-semibold col-span-1 text-center">Product</div>
        <div className="font-semibold col-span-1 text-center">Price</div>
        <div className="font-semibold col-span-1 text-center">Quantity</div>
        <div className="font-semibold col-span-1 text-center">Subtotal</div>
      </div>

      <div className="">
        {productsData.slice(0, 3).map((item) => (
          <CartItem
            key={item.id}
            item={item}
            // onQuantityChange={handleQuantityChange}
            // onRemoveItem={handleRemoveItem}
          />
        ))}
        <div className="flex justify-between items-center">
          <button className="border border-deep-gray  px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out">
            Return To Shop
          </button>
          <button className="border border-deep-gray  px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out">
            Update Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="coupon-form mt-4">
          <CouponForm onApplyCoupon={handleApplyCoupon} />
        </div>
        <div className="cart-summary mt-4">
          <CartSummary
          // items={cartItems}
          />
        </div>
      </div>
    </div>
  );
}
