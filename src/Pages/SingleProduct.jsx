import { div } from "motion/react-client";
import React from "react";
import ProductDetails from "../Components/ProductDetails";
import { assets } from "../assets/data.js";
import PagesHero from "../Components/PagesHero.jsx";
import Newsletter from "../Components/Newsletter.jsx";
import RelatedProductList from "../Components/Relatedproduct.jsx";
const SingleProduct = () => {
  return (
    <div>
      <PagesHero img={assets.bg_1} tagline="Home Product Product Single" heading="Product Single" />
      <ProductDetails />
      <RelatedProductList/>
      <Newsletter/>
    </div>
  );
};

export default SingleProduct;
