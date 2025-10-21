import { useState } from "react";
import { categories } from "../data/categories";

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
}) {
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(true);

  return (
    <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] overflow-y-auto transition-colors duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:block hidden">
        Filters
      </h2>

      {/* Sort By */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-colors duration-300"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mb-4 sm:mb-6">
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors mb-2 sm:mb-3 -mx-2"
          onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
        >
          <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
            Categories
          </h3>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
              isCategoryExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            isCategoryExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === "all"}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="mr-3 accent-gray-500 dark:accent-gray-600"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              All Products
            </span>
          </label>
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors"
            >
              <input
                type="radio"
                name="category"
                value={category.slug}
                checked={selectedCategory === category.slug}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-3 accent-gray-500 dark:accent-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {category.icon} {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 sm:mb-6">
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors mb-2 sm:mb-3 -mx-2"
          onClick={() => setIsPriceExpanded(!isPriceExpanded)}
        >
          <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
            Price Range
          </h3>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
              isPriceExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className={`space-y-4 px-1 overflow-hidden transition-all duration-300 ${
            isPriceExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>

          {/* Min Price Slider */}
          <div>
            <label className="text-xs text-gray-500 dark:text-gray-500 mb-1 block">
              Min: ${priceRange[0]}
            </label>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[0]}
              onChange={(e) => {
                const newMin = parseInt(e.target.value);
                if (newMin <= priceRange[1]) {
                  onPriceRangeChange([newMin, priceRange[1]]);
                }
              }}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-600 dark:accent-gray-500"
            />
          </div>

          {/* Max Price Slider */}
          <div>
            <label className="text-xs text-gray-500 dark:text-gray-500 mb-1 block">
              Max: ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[1]}
              onChange={(e) => {
                const newMax = parseInt(e.target.value);
                if (newMax >= priceRange[0]) {
                  onPriceRangeChange([priceRange[0], newMax]);
                }
              }}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-600 dark:accent-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          onCategoryChange("all");
          onPriceRangeChange([0, 500]);
          onSortChange("featured");
        }}
        className="w-full py-2 px-3 sm:px-4 border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}
