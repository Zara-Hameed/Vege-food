import React, { useState } from "react";
import { assets } from "../assets/data.js";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="p-20">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="lg:w-1/2"  data-aos="fade-up">
            <img
              src={assets.product1}
              alt="Bell Pepper"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Details */}
          <div className="lg:w-1/2 space-y-4"  data-aos="fade-up">
            <h3 className="text-2xl font-semibold">Bell Pepper</h3>

            {/* Ratings */}
            <div className="flex flex-wrap items-center text-sm">
              <p className="flex items-center mr-6">
                <span className="mr-2">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="ion-ios-star-outline text-yellow-500"
                  ></span>
                ))}
              </p>
              <p className="mr-6">
                <span className="text-black">100</span>{" "}
                <span className="text-gray-400">Rating</span>
              </p>
              <p>
                <span className="text-black">500</span>{" "}
                <span className="text-gray-400">Sold</span>
              </p>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-primary">$120.00</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed"  data-aos="fade-up">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>

            {/* Size Selector */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="relative w-48">
                <select className="block w-full border border-gray-300 rounded py-2 pl-3 pr-8 focus:outline-none focus:ring focus:border-primary">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <span className="ion-ios-arrow-down text-gray-500"></span>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 cursor-pointer rounded hover:bg-gray-100"
              >
                -
                <i className="ion-ios-remove"></i>
              </button>
              <input
                type="text"
                className="w-12 text-center border-t border-b border-gray-300"
                value={quantity}
                readOnly
              />
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100 "
              >+
                <i className="ion-ios-add"></i>
              </button>
            </div>

            {/* Stock Info */}
            <p className="text-black mt-2">600 kg available</p>

            {/* Add to Cart Button */}
            <button className="bg-black text-white py-3 px-6 mt-4 hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
