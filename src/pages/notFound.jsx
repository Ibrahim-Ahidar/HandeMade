import { Link } from "react-router-dom";
import Navbar from "../layouts/navbar";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#D4A373] mb-4">404</h1>
          <h2 className="text-4xl font-bold text-[#603808] mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off the
            beaten path.
          </p>
        </div>

        <div className="mb-12">
          <svg
            className="mx-auto w-64 h-64 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button variant="primary" className="px-8 py-3 mr-4">
              Go Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="px-8 py-3">
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-[#603808] mb-6">
            Or try these popular pages:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link
              to="/products"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">🛍️</div>
              <h4 className="font-semibold text-gray-800">Shop Products</h4>
            </Link>
            <Link
              to="/about"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">ℹ️</div>
              <h4 className="font-semibold text-gray-800">About Us</h4>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">✉️</div>
              <h4 className="font-semibold text-gray-800">Contact</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
