import React from "react";
import about from "../assets/about.jpg.webp";

const AboutSection = () => {
  return (
    <section className="bg-light px-5 sm:px-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          {/* Left Image with Play Icon */}
          <div
            className="w-full lg:w-5/12 h-150 p-5 flex justify-center items-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${about})` }}
             data-aos="fade-up"
          >
            <a
              href="https://vimeo.com/45830194"
              className="flex justify-center items-center bg-primary rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl sm:text-2xl text-white">&#9658;</span>
            </a>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-7/12 py-6 sm:py-8 lg:py-12 px-3 sm:px-5"  data-aos="fade-up">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold mb-4 leading-snug">
                Welcome to Vegefoods an eCommerce website
              </h2>
            </div>
            <div>
              <p className="mb-4 text-gray-500 text-justify text-xs sm:text-sm lg:text-base leading-relaxed">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="mb-6 text-gray-500 text-justify text-xs sm:text-sm lg:text-base leading-relaxed">
                But nothing the copy said could convince her and so it didn’t
                take long until a few insidious Copy Writers ambushed her, made
                her drunk with Longe and Parole and dragged her into their
                agency, where they abused her for their.
              </p>
              <a
                href="#"
                className="inline-block bg-primary hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm lg:text-base"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
