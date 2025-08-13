import React from "react";
import PagesHero from "../Components/PagesHero";
import { assets } from "../assets/data.js";
import Checkout from "../Components/Checkout";
import Newsletter from "../Components/Newsletter";

const Checkoutpage = () => {
  return (
    <div>
      <PagesHero img={assets.bg_1} tagline="Home Checkout" heading="Checkout" />
      <Checkout/>
      <Newsletter/>
    </div>
  );
};

export default Checkoutpage;
