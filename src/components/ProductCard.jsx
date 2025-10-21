import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import InteractiveButton from "./InteractiveButton";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, isInCart } = useCart();

  const handleCartAction = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
            Sale
          </span>
        )}
        {product.stock <= 3 && product.stock > 0 && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
            {product.stock} left
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 left-2 bg-gray-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
            Sold Out
          </span>
        )}
      </div>

      <div className="p-2 sm:p-3 md:p-4">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
          {product.description}
        </p>

        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          <img
            src={product.artisan.avatar}
            alt={product.artisan.name}
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-gray-300 dark:border-gray-700"
          />
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 truncate">
            {product.artisan.name}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-500 dark:text-yellow-400">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>

        <InteractiveButton
          variant={isInCart(product.id) ? "secondary" : "primary"}
          className="w-full mt-2 sm:mt-3 text-xs sm:text-sm !py-1.5 sm:!py-2"
          onClick={handleCartAction}
          disabled={product.stock === 0}
        >
          <span className="hidden sm:inline">
            {product.stock === 0
              ? "Out of Stock"
              : isInCart(product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </span>
          <span className="sm:hidden">
            {product.stock === 0
              ? "Sold Out"
              : isInCart(product.id)
              ? "Remove"
              : "Add to Cart"}
          </span>
        </InteractiveButton>
      </div>
    </Link>
  );
}
