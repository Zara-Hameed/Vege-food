import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg_3.jpg";

const CounterItem = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="flex flex-col items-center text-center p-20"  data-aos="fade-up">
      <h1 className="text-2xl sm:text-3xl md:text-4xl"  data-aos="fade-up">
        {count.toLocaleString()}
      </h1>
            <span className="uppercase text-xs sm:text-sm tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    { target: 10000, label: "Happy Customers" },
    { target: 100, label: "Branches" },
    { target: 1000, label: "Partner" },
    { target: 100, label: "Awards" },
  ];

  return (
    <section className="relative py-12">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.7, // only image opacity
        }}
         data-aos="fade-up"
      ></div>

      {/* Content */}
   <div className="relative container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 justify-items-center">
    {counters.map((item, index) => (
      <CounterItem
        key={index}
        target={item.target}
        label={item.label}
      />
    ))}
  </div>
</div>

    </section>
  );
};

export default CounterSection;
