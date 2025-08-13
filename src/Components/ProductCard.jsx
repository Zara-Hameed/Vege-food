import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductCard = ({ title, img, price, oldPrice, discount }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative text-center transition hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
       data-aos="fade-up"
    >
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
          {discount}
        </span>
      )}

      {/* Product Image */}
      <div className="p-6">
        <img src={img} alt={title} className="mx-auto h-45 object-contain" />
      </div>

      {/* Title */}
      <h3 className="uppercase text-gray-700 text-sm font-medium">{title}</h3>

      {/* Price Row / Icons on Hover */}
      <div className="relative mt-1 flex justify-center items-center gap-2">
        {!hovered ? (
          <>
            {oldPrice && (
              <span className="line-through text-gray-400 text-sm">
                {oldPrice}
              </span>
            )}
            <span className="text-primary font-semibold">{price}</span>
          </>
        ) : (
          <div className="flex gap-3">
            <button className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition">
              <FaBars />
            </button>
            <button className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition">
              <FaShoppingCart />
            </button>
            <button className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition">
              <FaHeart />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
