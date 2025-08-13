import React from "react";
import shipped from '../assets/shipped.png'
import diet from '../assets/diet.png'
import badge from '../assets/badge.png'
import customer_service from '../assets/customer-service.png'


const features = [
  {
    icon: <img src={shipped} alt="Free Shipping" className="w-12 h-12" />,
    title: "Free Shipping",
    subtitle: "On order over $100",
    bgColor: "bg-pink-200",
    hoverColor: "hover:bg-pink-300"
  },
  {
    icon: <img src={diet} alt="Always Fresh" className="w-12 h-12" />,
    title: "Always Fresh",
    subtitle: "Product well package",
    bgColor: "bg-yellow-200",
    hoverColor: "hover:bg-yellow-300"
  },
  {
    icon: <img src={badge} alt="Superior Qulaity" className="w-12 h-12" />,
    title: "Superior Quality",
    subtitle: "Quality Products",
    bgColor: "bg-sky-200",
    hoverColor: "hover:bg-sky-300"
  },
  {
    icon: <img src={customer_service} alt="Support" className="w-12 h-12" />,
    title: "Support",
    subtitle: "24/7 Support",
    bgColor: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-200"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105"  data-aos="fade-up"
            >
              <div
                className={`rounded-full p-4 mb-4 ${feature.bgColor} ${feature.hoverColor} transition-opacity duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
