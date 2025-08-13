import React from "react";

export default function Checkout() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        <div className="flex flex-col xl:flex-row xl:justify-center gap-8"  data-aos="fade-up">
          
          {/* Billing Details Form */}
          <div className="xl:w-7/12 bg-white p-6 shadow rounded">
            <form className="billing-form"  data-aos="fade-up">
              <h3 className="text-2xl  mb-4"  data-aos="fade-up">Billing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end"  data-aos="fade-up">
                
                {/* First Name */}
                <div>
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Country */}
                <div className="md:col-span-2">
                  <label className="block mb-1">State / Country</label>
                  <select
                    className="w-full text-gray-400 border border-gray-200 rounded p-3 focus:outline-none focus:border-primary text-sm"
                  >
                    <option>France</option>
                    <option>Italy</option>
                    <option>Philippines</option>
                    <option>South Korea</option>
                    <option>Hongkong</option>
                    <option>Japan</option>
                  </select>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block mb-1">Street Address</label>
                  <input
                    type="text"
                    className="w-full border text-sm border-gray-200 rounded p-3 focus:outline-none focus:border-primary"
                    placeholder="House number and street name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full text-sm border  border-gray-200 rounded p-3 focus:outline-none focus:border-primary"
                    placeholder="Apartment, suite, unit etc: (optional)"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block mb-1">Town / City</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Zip */}
                <div>
                  <label className="block mb-1">Postcode / ZIP *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-100 rounded px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder=""
                  />
                </div>

                {/* Radio Options */}
                <div className="md:col-span-2 mt-4 flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="account" />
                    Create an Account?
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="account" />
                    Ship to different address
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="xl:w-5/12 space-y-6"  data-aos="fade-up">
            
            {/* Cart Total */}
            <div className="bg-white p-6 shadow rounded"  data-aos="fade-up">
              <h3 className="text-xl mb-4">Cart Total</h3>
              <p className="flex justify-between text-gray-500 text-sm mb-4">
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
              <p className="flex justify-between text-sm">
                <span className="uppercase text-gray-500">Total</span>
                <span className="font-semibold">$17.60</span>
              </p>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 shadow rounded"  data-aos="fade-up">
              <h3 className="text-2xl  mb-4">Payment Method</h3>
              
              <label className="flex items-center gap-2 mb-6 text-gray-500 text-sm ">
                <input type="radio" name="payment" />
                Direct Bank Transfer
              </label>
              <label className="flex items-center gap-2 mb-6 text-gray-500 text-sm ">
                <input type="radio" name="payment" />
                Check Payment
              </label>
              <label className="flex items-center gap-2 mb-6 text-gray-500 text-sm ">
                <input type="radio" name="payment" />
                Paypal
              </label>

              <label className="flex items-center gap-2 mb-6 text-gray-500 text-sm ">
                <input type="checkbox" />
                I have read and accept the terms and conditions
              </label>

              <a
                href="#"
                className="inline-block bg-primary text-white py-3 px-4 rounded-full hover:bg-transparent hover:border hover:border-primary hover:text-primary transition duration-300"
              >
                Place an order
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
