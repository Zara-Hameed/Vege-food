import React from "react";
import { products, assets } from "../assets/data.js";
import PagesHero from "../Components/PagesHero";
import Wishlist from "../Components/Wishlist.jsx";
import Newsletter from '../Components/Newsletter.jsx'
const WishlistProduct = () => {
  return (
    <div>
      <PagesHero
        img={assets.bg_1}
        tagline="Home wishlist"
        heading="My Wishlist"
      />
      <Wishlist />
      <Newsletter/>

      
    </div>
  );
};

export default WishlistProduct;
