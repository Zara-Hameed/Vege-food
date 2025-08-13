import React from "react";
import {assets} from '../assets/data.js'

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        {/* Contact Info Boxes */}
        <div className="flex flex-wrap mb-8 justify-around">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white p-4 h-full">
              <p className="text-gray-500">
                <span >Address:</span> 198 West 21th
                Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white p-4 h-full">
              <p>
                <span className="text-gray-500">Phone:</span>{" "}
                <a href="tel://1234567920" className="text-gray-900">
                  + 1235 2355 98
                </a>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white p-4 h-full">
              <p>
                <span className="text-gray-500">Email:</span>{" "}
                <a
                  href="mailto:info@yoursite.com"
                className="text-gray-900"
                >
                  info@yoursite.com
                </a>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white p-4 h-full">
              <p>
                <span className="text-gray-500">Website:</span>{" "}
                <a href="#" className="text-gray-900">
                  yoursite.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Form + Map */}
        <div className="flex flex-col lg:flex-row gap-6"  data-aos="fade-up">


          {/* Map */}
          <div className="w-full lg:w-1/2"  data-aos="fade-up">
            <div id="map" className="bg-white h-full min-h-[300px]">
              <img src={assets.bg_2} alt="" />
            </div>
          </div>
                    {/* Form */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none">
            <form className="bg-white p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1  focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1  focus:ring-primary"
              />
              <textarea
                rows="7"
                placeholder="Message"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="bg-primary text-white py-3 px-5 cursor-pointer hover:bg-transparent rounded-full hover:text-primary hover:border hover:border-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
