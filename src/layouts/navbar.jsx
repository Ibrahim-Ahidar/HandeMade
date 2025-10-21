import { Link, useLocation } from "react-router-dom";
import { Tw } from "../theme/Theme";
import { useCart } from "../hooks/CartContext";
import { useState } from "react";
import logoTallDark from "../assets/imgs/logo-tall-dark.png";

export default function Navbar() {
  const { getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartCount = getCartCount();

  return (
    <nav className="backdrop-blur-md border-b sticky top-0 z-50 bg-black/80 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <img
              src={logoTallDark}
              alt="HandMade Logo"
              className="h-14 w-[160px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-blue-400 hover:text-blue-300 transition font-medium"
                  : Tw.navLink
              }
            >
              Home
            </Link>
            <Link
              to="/products"
              className={
                location.pathname === "/products"
                  ? "text-blue-400 hover:text-blue-300 transition font-medium"
                  : Tw.navLink
              }
            >
              Products
            </Link>
            <Link
              to="/seller"
              className={
                location.pathname === "/seller"
                  ? "text-blue-400 hover:text-blue-300 transition font-medium"
                  : Tw.navLink
              }
            >
              Seller Portal
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "text-blue-400 hover:text-blue-300 transition font-medium"
                  : Tw.navLink
              }
            >
              Contact
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <svg
                className="w-6 h-6 transition text-gray-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Cart Icon & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Cart Icon */}
            <Link to="/cart" className="relative group p-2">
              <svg
                className="w-6 h-6 transition text-gray-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`py-2 ${
                  location.pathname === "/"
                    ? "text-blue-400 hover:text-blue-300 transition font-medium"
                    : Tw.navLink
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`py-2 ${
                  location.pathname === "/products"
                    ? "text-blue-400 hover:text-blue-300 transition font-medium"
                    : Tw.navLink
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/seller"
                className={`py-2 ${
                  location.pathname === "/seller"
                    ? "text-blue-400 hover:text-blue-300 transition font-medium"
                    : Tw.navLink
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Seller Portal
              </Link>
              <Link
                to="/contact"
                className={`py-2 ${
                  location.pathname === "/contact"
                    ? "text-blue-400 hover:text-blue-300 transition font-medium"
                    : Tw.navLink
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
