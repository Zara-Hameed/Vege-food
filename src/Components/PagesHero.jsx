import React from 'react';

const PagesHero = ({ tagline, heading, img }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className="text-white text-lg transform uppercase"  data-aos="fade-up">{tagline}</p>
      <h1 className="text-4xl font-bold tracking-wider text-white"  data-aos="fade-up">
        {heading}
      </h1>
    </div>
  );
};

export default PagesHero;
