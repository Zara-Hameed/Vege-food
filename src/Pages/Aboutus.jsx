import React from "react";
import AboutSection from "../Components/About";
import PagesHero from "../Components/PagesHero";
import { assets } from "../assets/data.js";
import Newsletter from "../Components/Newsletter.jsx";
import TestimonialSection from "../Components/Testimonial.jsx";
import CounterSection from "../Components/CounterSection.jsx";
import FeaturesSection from "../Components/Features.jsx";
const Aboutus = () => {
  return (
    <div>
      <PagesHero img={assets.bg_1} tagline="Home About us" heading="About us" />
      <AboutSection />
      <Newsletter />
      <CounterSection />
      <TestimonialSection />
      <FeaturesSection />
    </div>
  );
};

export default Aboutus;
