import React from "react";
import PagesHero from "../Components/PagesHero";
import { assets } from "../assets/data.js";
import CartProducts from "../Components/CartProducts.jsx";
import CartSidebar from "../Components/Cartorder.jsx";
import Newsletter from '../Components/Newsletter.jsx'

const Cart = () => {
  return (
    <div>
      <PagesHero img={assets.bg_1} tagline="Home Cart" heading="My Cart" />
      <CartProducts/>
      <CartSidebar/>
      <Newsletter/>
    </div>
  );
};

export default Cart;
