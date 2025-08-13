import React, { useEffect, useState } from "react";
import { assets } from "../assets/data";

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set deal end date (example: 3 days from now)
    const dealEndDate = new Date();
    dealEndDate.setDate(dealEndDate.getDate() + 3); // 3 days from today

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dealEndDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="bg-cover bg-center py-30"
      style={{ backgroundImage: `url(${assets.bg_3})` }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex justify-end">
          <div className="w-full md:w-1/2 animate-fadeIn">
            <span className="text-sm uppercase text-green-700 font-semibold">
              Best Price For You
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900" data-aos="fade-up">
              Deal of the day
            </h2>
            <p className="text-gray-700 mb-4" data-aos="fade-up">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            <h3 className="text-2xl font-semibold mb-2">
              <a href="#" className="text-green-800 hover:underline">Spinach</a>
            </h3>
            <span className="text-xl text-gray-800">
              $10 <a href="#" className="text-primary font-xl ml-2">now $5 only</a>
            </span>

            {/* Countdown Timer */}
            <div id="timer" className="flex mt-6 space-x-6 text-xl  text-gray-900" data-aos="fade-up">
              <div className="time text-center">{timeLeft.days}d</div>
              <div className="time text-center">{timeLeft.hours}h</div>
              <div className="time text-center">{timeLeft.minutes}m</div>
              <div className="time text-center">{timeLeft.seconds}s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
