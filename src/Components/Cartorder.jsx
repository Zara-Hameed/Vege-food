import React from "react";

export default function CartSidebar() {
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-col lg:flex-row lg:justify-end gap-8 mt-5 "  data-aos="fade-up">
        
        {/* Coupon Code */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow"  data-aos="fade-up">
          <h3 className="text-lg  mb-4">Coupon Code</h3>
          <p className="mb-4 text-gray-500 text-sm">
            Enter your coupon code if you have one
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-4">
                Coupon code
              </label>
              <input
                type="text"
                className="w-full border border-gray-100 rounded px-3 py-2 text-left focus:outline-none mb-4"
                placeholder=""
              />
            </div>
          </form>
          <p className="mt-4">
            <a
              href="checkout.html"
               className="inline-block bg-primary text-white py-3 px-4 rounded-full hover:bg-transparent hover:border hover:border-primary hover:text-primary"
            >
              Apply Coupon
            </a>
          </p>
        </div>

        {/* Estimate Shipping and Tax */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow"  data-aos="fade-up">
          <h3 className="text-lg mb-4">
            Estimate shipping and tax
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Enter your destination to get a shipping estimate
          </p>
          <form className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-normal mb-4 text-gray-800">Country</label>
              <input
                type="text"
                className="w-full mb-4  border border-gray-100 rounded px-3 py-2 text-left focus:outline-none"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-normal  mb-4 text-gray-800">
                State/Province
              </label>
              <input
                type="text"
                className="w-full border mb-4 border-gray-100 rounded px-3 py-2 text-left focus:outline-none"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-normal text-gray-800 mb-4">
                Zip/Postal Code
              </label>
              <input
                type="text"
                className="w-full border border-gray-100 rounded px-3 py-2 text-left focus:outline-none mb-4"
                placeholder=""
              />
            </div>
          </form>
          <p className="mt-4">
            <a
              href="checkout.html"
              className="inline-block bg-primary text-white py-3 px-4 mb-4 rounded-full hover:bg-transparent hover:border hover:border-primary hover:text-primary"
            >
              Estimate
            </a>
          </p>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow"  data-aos="fade-up">
          <h3 className="text-lg mb-4">Cart Totals</h3>
          <p className="flex justify-between  text-gray-500 text-sm mb-4">
            <span>Subtotal</span>
            <span>$20.60</span>
          </p>
          <p className="flex justify-between text-gray-500 text-sm mb-4">
            <span>Delivery</span>
            <span>$0.00</span>
          </p>
          <p className="flex justify-between text-gray-500 text-sm mb-4">
            <span>Discount</span>
            <span>$3.00</span>
          </p>
          <hr className="my-3 text-gray-300" />
          <p className="flex justify-between">
            <span className="uppercase text-sm text-gray-500">Total</span>
            <span className="font-bold">$17.60</span>
          </p>
          <p className="mt-4">
            <a
              href="checkout.html"
             className="inline-block bg-primary text-white py-3 px-4 rounded-full hover:bg-transparent hover:border hover:border-primary hover:text-primary"
            >
              Proceed to Checkout
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
