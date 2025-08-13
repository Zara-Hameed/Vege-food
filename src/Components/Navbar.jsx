import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleShop = () => setIsShopOpen(!isShopOpen);

  // Helper: check if exact link is active
  const isActive = (path) => location.pathname === path;

  // Parent menu active check
  const isShopActive = [
    "/shop",
    "/wish-list-product",
    "/single-product",
    "/cart",
    "/check-out",
  ].includes(location.pathname);

  return (
    <div className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-primary text-2xl font-bold">
          <Link to="/">VEGEFOODS</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-primary focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-10 uppercase text-sm relative">
          <li>
            <Link
              to="/"
              className={
                isActive("/") ? "text-primary font-semibold" : "text-gray-700"
              }
            >
              Home
            </Link>
          </li>

          {/* Shop dropdown */}
          <li
            className={`relative group ${
              isShopActive ? "text-primary font-semibold" : "text-gray-700"
            }`}
          >
            <button className="flex items-center gap-1 focus:outline-none uppercase">
              Shop
              <span className="ml-1">▾</span>
            </button>
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
              <li
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isActive("/shop")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                <Link to="/shop">Shop</Link>
              </li>
              <li
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isActive("/wish-list-product")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                <Link to="/wish-list-product">Wishlist</Link>
              </li>
              <li
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isActive("/single-product")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                <Link to="/single-product">Single Product</Link>
              </li>
              <li
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isActive("/cart")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                <Link to="/cart">Cart</Link>
              </li>
              <li
                className={`px-4 py-2 hover:bg-gray-100 ${
                  isActive("/check-out")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                <Link to="/check-out">Checkout</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/about-us"
              className={
                isActive("/about-us")
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={
                isActive("/blog")
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                isActive("/contact")
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={
                isActive("/cart")
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm uppercase text-primary">
            <li>
              <Link
                to="/"
                className={
                  isActive("/") ? "text-primary font-semibold" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Mobile shop dropdown */}
            <li>
              <button
                onClick={toggleShop}
                className={`flex items-center justify-between w-full uppercase focus:outline-none ${
                  isShopActive ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                Shop <span>{isShopOpen ? "▴" : "▾"}</span>
              </button>
              {isShopOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2 ">
                  <li
                    className={
                      isActive("/shop")
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }
                  >
                    <Link to="/shop" onClick={() => setIsOpen(false)}>
                      Shop
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/wish-list-product")
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }
                  >
                    <Link
                      to="/wish-list-product"
                      onClick={() => setIsOpen(false)}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/single-product")
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }
                  >
                    <Link to="/single-product" onClick={() => setIsOpen(false)}>
                      Single Product
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/cart")
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }
                  >
                    <Link to="/cart" onClick={() => setIsOpen(false)}>
                      Cart
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/check-out")
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }
                  >
                    <Link to="/check-out" onClick={() => setIsOpen(false)}>
                      Checkout
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/about-us"
                className={
                  isActive("/about-us")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={
                  isActive("/blog")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  isActive("/contact")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={
                  isActive("/cart")
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
