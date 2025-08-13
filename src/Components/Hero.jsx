import React, { useState, useEffect } from "react";
import bgImage1 from "../assets/bg_1.jpg.webp";
import bgImage2 from "../assets/bg_2.jpg.webp"; // second image


const slides = [
  {
    image: bgImage1,
    heading: "100% Fresh & Organic Foods",
  },
  {
    image: bgImage2,
    heading: "We Serve Fresh Vegetables & Food",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-white text-center transition-all duration-1000" 
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
       data-aos="fade-up"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        {/* Dynamic Heading */}
        <h1
          className="text-white font-amatic leading-tight 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700"
        >
          {slides[currentSlide].heading}
        </h1>

        {/* Static Paragraph */}
        <p className="mt-4 text-lg md:text-xl">
         We Deliver Organic Vegetables & Fruits
        </p>

        {/* Static Button */}
        <button className="mt-6 bg-primary hover:bg-transparent hover:text-primary hover:border hover:border-primary text-white px-6 py-3 rounded-full transition">
          View Details
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
