import React from "react";
import WishList from "../sections/wishlist/WishList";
import JustForYou from "../sections/wishlist/JustForYou";

export default function WishListpage() {
  return (
    <section className="padding-y mt-20 lg:mt-0">
      <div className="container">
        <WishList />

        <JustForYou />
      </div>
    </section>
  );
}
