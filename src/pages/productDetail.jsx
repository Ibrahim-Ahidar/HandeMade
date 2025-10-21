import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../layouts/navbar";
import ProductGallery from "../components/ProductGallery";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { products, reviews } from "../data/products";
import { useCart } from "../hooks/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));
  const productReviews = reviews[id] || [];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="text-gray-400 hover:text-white hover:underline"
          >
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-4 p-4 bg-green-900/30 border border-green-500/50 text-green-300 rounded-lg flex items-center justify-between backdrop-blur-sm">
            <span>✓ Added to cart successfully!</span>
            <button
              onClick={() => navigate("/cart")}
              className="underline hover:text-green-100 transition-colors"
            >
              View Cart
            </button>
          </div>
        )}

        {/* Product Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Gallery */}
          <div>
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current"
                        : "fill-gray-600"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Product Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-6 space-y-2 border border-white/10">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-white">Dimensions:</span>
                <span className="text-gray-300">{product.dimensions}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-white">Materials:</span>
                <span className="text-gray-300">{product.materials}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-white">Stock:</span>
                <span
                  className={
                    product.stock > 5
                      ? "text-green-400"
                      : product.stock > 0
                      ? "text-orange-400"
                      : "text-red-400"
                  }
                >
                  {product.stock > 0
                    ? `${product.stock} available`
                    : "Out of stock"}
                </span>
              </div>
            </div>

            {/* Artisan Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/10">
              <h3 className="font-semibold text-white mb-3">
                About the Artisan
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="w-16 h-16 rounded-full ring-2 ring-white/20"
                />
                <div>
                  <p className="font-semibold text-white">
                    {product.artisan.name}
                  </p>
                  <p className="text-sm text-gray-300">{product.artisan.bio}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    📍 {product.artisan.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            {product.stock > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-semibold text-white mb-2">
                  Quantity:
                </label>
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <Button
              variant="primary"
              className="w-full py-4 text-lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0
                ? "Out of Stock"
                : isInCart(product.id)
                ? "Add More to Cart"
                : "Add to Cart"}
            </Button>

            {/* Tags */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {productReviews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Customer Reviews
            </h2>
            <div className="space-y-4">
              {productReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">
                        {review.userName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "fill-current" : "fill-gray-600"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                  <p className="text-sm text-gray-400 mt-3">
                    {review.helpful} people found this helpful
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
