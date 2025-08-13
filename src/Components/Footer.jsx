import { FaTwitter, FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-30 text-gray-800 px-10">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Company Info */}
          <div className="w-full sm:w-[220px]">
            <h2 className="text-xl font-semibold mb-4">Vegefoods</h2>
            <p className="text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-700 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-700 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-700 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="w-full sm:w-auto">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Journal</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-full sm:w-[300px]">
            <h2 className="text-xl font-semibold mb-4">Help</h2>
            <div className="flex gap-8">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Shipping Information</a></li>
                <li><a href="#" className="hover:underline">Returns & Exchange</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-[260px]">
            <h2 className="text-xl font-semibold mb-4">Have a Questions?</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-1" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+23923929210">+2 392 3929 210</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
            <span className="text-red-500 inline-block align-middle"><FaHeart /></span> by{" "}
            <a href="https://colorlib.com" className="text-green-600 hover:underline" target="_blank" rel="noreferrer">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
