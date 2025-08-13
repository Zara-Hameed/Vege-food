import React from "react";
import PagesHero from "../Components/PagesHero";
import { assets } from "../assets/data.js";
import ContactSection from "../Components/ContactfromSection.jsx";

const Contact = () => {
  return (
    <div>
      <PagesHero img={assets.bg_1} tagline="Home Contact us" heading="Contact us" />
      {/* <div className="flex flex-col sm:flex-row md:flex-row justify-between py-30 px-10 ">
        <div className="mt-10"><p className="text-gray-500"> <span>Address:</span> 198 West 21th <br/> Street, Suite 721 New York  <br/> NY 10016</p></div>
        <div className="mt-10"><p><span className="text-gray-500">Phone:</span> + 1235 2355 98</p></div>
        <div className="mt-10"><p><span className="text-gray-500">Email:</span> info@yoursite.com</p></div>
        <div className="mt-10"><p><span className="text-gray-500">Website</span> yoursite.com</p></div>
      </div> */}
      <ContactSection/>
    </div>
  );
};

export default Contact;
