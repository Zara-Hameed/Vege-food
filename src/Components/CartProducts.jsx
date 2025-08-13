import React from "react";
import { assets } from "../assets/data.js";

const cartItems = [
  {
    id: 1,
    name: "Bell Pepper",
    description:
      "Far far away, behind the word mountains, far from the countries",
    price: 4.9,
    quantity: 1,
    image: assets.product1,
  },
  {
    id: 2,
    name: "Bell Pepper",
    description:
      "Far far away, behind the word mountains, far from the countries",
    price: 15.7,
    quantity: 1,
    image: assets.product2,
  },
  
];

export default function CartProducts() {
  return (
    <section className="px-4 md:px-20 py-20 bg-white">
      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide"  data-aos="fade-up">
        <div className="min-w-[700px]">
          {/* Header Row */}
          <div className="grid grid-cols-[50px_100px_1fr_100px_120px_100px] text-center font-semibold bg-primary text-white py-6"  data-aos="fade-up">
            <div></div>
            <div>Product List</div>
            <div></div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {/* Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[50px_100px_1fr_100px_120px_100px] text-center items-center  last:border-b-0 py-4"
            data-aos="fade-up" >
              {/* Remove button */}
              <button className= "text-gray-500 hover:text-gray-700"  data-aos="fade-up">
                <span className="text-2xl">&times;</span>
              </button>

              {/* Product image */}
              <div
                className="w-20 h-20 bg-center bg-cover mx-auto rounded"
                style={{ backgroundImage: `url(${item.image})` }}
                 data-aos="fade-up"
              ></div>

              {/* Product name and description */}
              <div className="text-center"  data-aos="fade-up">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              {/* Price */}
              <div className="text-gray-700">${item.price.toFixed(2)}</div>

              {/* Quantity input */}
              <div>
                <input
                  type="number"
                  className="border border-gray-100 w-16 text-center rounded"
                  value={item.quantity}
                  min="1"
                  max="100"
                  readOnly
                />
              </div>

              {/* Total */}
              <div className="font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
