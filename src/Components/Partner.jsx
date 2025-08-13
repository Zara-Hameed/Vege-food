import React from "react";
import { assets } from "../assets/data"; // adjust path if needed

const partners = [
  assets.partner1,
  assets.partner2,
  assets.partner3,
  assets.partner4,
  assets.partner5,
];

const PartnerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4"  data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center"  data-aos="fade-up" >
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              <a href="#">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-24 sm:w-28 md:w-32 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
