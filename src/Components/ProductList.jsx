import React from "react";
import { products } from "../assets/data.js";
import ProductCard from "./ProductCard.jsx";
const ProductList = () => {
  return (
    
 <div className="py-20">
  <div className="flex flex-col items-center text-center justify-between gap-5"  data-aos="fade-up">
    <h3 className="text-lg text-primary italic ">Featured Products</h3>
    <h1 className="text-4xl font-semibold">Our Products</h1>
    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
  </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-5"  data-aos="fade-up">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          img={product.img}
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
        />
      ))}
    </div>
 </div>
  );
};

export default ProductList;
