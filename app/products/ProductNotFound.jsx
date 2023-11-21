import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="h-screen flex items-center justify-center gap-5 flex-col text-center">
      <h2 className="text-xl font-bold">404 - Product Not Found</h2>
      <p>
        Sorry, the product you are looking for does not exist or may have been
        removed.
      </p>
      <Link href="/products" className="btn-primary">
        Back to Products
      </Link>
    </div>
  );
}
