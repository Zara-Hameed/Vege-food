import React from "react";
import { assets } from "../assets/data";
const testimonials = [
  {
    image: assets.person1,
    name: "Garreth Smith",
    position: "Marketing Manager",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image: assets.person2,
    name: "Garreth Smith",
    position: "Interface Designer",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image: assets.person3,
    name: "Garreth Smith",
    position: "UI Designer",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image: assets.person1,
    name: "Garreth Smith",
    position: "Web Developer",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image: assets.person1,
    name: "Garreth Smith",
    position: "System Analyst",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-10 bg-white ">
      <div className="container mx-auto px-2"  data-aos="fade-up">
        <div className="text-center mb-12">
          <span className="text-green-600 italic">Testimony</span>
          <h2 className="text-4xl font-semibold mt-7">Our satisfied customer says</h2>
          <p className="text-gray-500 mt-8 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"  data-aos="fade-up">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md px-6 pt-8 pb-10 text-center relative"
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-green-500"></div>
              <div className="w-20 h-20 mx-auto rounded-full bg-cover bg-center mb-4 relative"
                style={{ backgroundImage: `url(${testimonial.image})` }}>
                <span className="absolute -bottom-1 right-1 bg-white rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="green"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h.01M15 12h.01M7.5 15h9M3 8.25C3 6.45507 4.45507 5 6.25 5h11.5C19.5449 5 21 6.45507 21 8.25v7.5C21 17.5449 19.5449 19 17.75 19H6.25C4.45507 19 3 17.5449 3 15.75v-7.5z"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-6">{testimonial.quote}</p>
              <p className="font-semibold text-black text-sm">
                {testimonial.name}
              </p>
              <p className="text-xs tracking-widest text-gray-500 uppercase">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
