import React from "react";
import { assets } from "../assets/data";

const Category = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4"  data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20"  data-aos="fade-up">
          {/* Fruits */}
          <div
            className="bg-cover bg-center h-60 relative"
            style={{ backgroundImage: `url(${assets.category1})` }}
             data-aos="fade-up"
          >
            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-1"  data-aos="fade-up">
              <h2 className="text-sm font-semibold">Fruits</h2>
            </div>
          </div>

          {/* Main Banner - Vegetables */}     
<div
  className="relative bg-bottom bg-cover h-60 sm:h-64 md:h-72 lg:row-span-2 lg:h-full"
  style={{ backgroundImage: `url(${assets.category})` }}
   data-aos="fade-up"
>
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs px-4"  data-aos="fade-up">
    <div className="rounded-xl text-center"  data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl text-primary font-bold mb-2"  data-aos="fade-up">
        Vegetables
      </h2>
      <p className="text-gray-600 text-sm md:text-base" data-aos="fade-up">
        Protect the health of every home
      </p>
      <button className="mt-4 bg-primary text-white font-semibold px-5 py-2 rounded-full transition border border-transparent hover:bg-white hover:text-primary hover:border-primary"  data-aos="fade-up">
        Shop now
      </button>
    </div>
  </div>
</div>


          {/* Juices */}
          <div
            className="bg-cover bg-center h-60 relative"
            style={{ backgroundImage: `url(${assets.category3})` }}  data-aos="fade-up"
          >
            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-1"  data-aos="fade-up">
              <h2 className="text-sm font-semibold">Juices</h2>
            </div>
          </div>

          {/* Vegetables */}
          <div
            className="bg-cover bg-center h-60 relative"
            style={{ backgroundImage: `url(${assets.category2})` }}  data-aos="fade-up"
          >
            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-1">
              <h2 className="text-sm font-semibold">Vegetables</h2>
            </div>
          </div>

          {/* Dried */}
          <div
            className="bg-cover bg-center h-60 relative"
            style={{ backgroundImage: `url(${assets.category4})` }}  data-aos="fade-up"
          >
            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-1">
              <h2 className="text-sm font-semibold">Dried</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
