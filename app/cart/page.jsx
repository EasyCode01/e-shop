import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CouponForm from "../components/cart/CouponForm";
export default function Page({ handleApplyCoupon }) {
  return (
    <div className="container mx-auto py-8">
      <div className="hidden md:grid grid-cols-4 items-center mb-4 p-8 bg-white shadow-md ">
        <div className="font-semibold col-span-1 text-center">Product</div>
        <div className="font-semibold col-span-1 text-center">Price</div>
        <div className="font-semibold col-span-1 text-center">Quantity</div>
        <div className="font-semibold col-span-1 text-center">Subtotal</div>
      </div>

      <CartItem />

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="coupon-form mt-4">
          <CouponForm onApplyCoupon={handleApplyCoupon} />
        </div>
        <div className="mt-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
