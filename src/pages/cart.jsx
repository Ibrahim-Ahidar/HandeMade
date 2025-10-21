import { useCart } from "../hooks/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../layouts/navbar";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleQuantityChange = (productId, newQuantity, maxStock) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0 && quantity <= maxStock) {
      updateQuantity(productId, quantity);
    } else if (quantity > maxStock) {
      updateQuantity(productId, maxStock);
    }
  };

  const handleClearCart = () => {
    clearCart();
    setShowClearConfirm(false);
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="text-center">
              <svg
                className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 text-sm md:text-base"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 md:mb-8">
            <h1 className="text-xl md:text-3xl font-bold text-white">
              Shopping Cart
            </h1>
            {cart.length > 0 && (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-red-400 hover:text-red-300 text-xs md:text-sm font-medium transition"
              >
                Clear Cart
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-3 md:p-4 hover:border-blue-500/50 transition"
                >
                  <div className="flex gap-3 md:gap-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.images?.[0] || item.image}
                        alt={item.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg hover:opacity-80 transition"
                      />
                    </Link>

                    {/* Product Info & Controls Container */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      {/* Top row: Product info and delete button */}
                      <div className="flex justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-sm md:text-lg font-semibold text-white hover:text-blue-400 transition block mb-1 line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          {item.category && (
                            <p className="text-xs md:text-sm text-gray-400 mb-1">
                              {item.category}
                            </p>
                          )}
                          <p className="text-base md:text-xl font-bold text-blue-400">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Delete Button - Desktop */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="hidden md:block text-gray-400 hover:text-red-400 transition p-1 h-fit"
                          title="Remove from cart"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>

                      {item.stock && (
                        <p className="text-xs text-gray-500 mb-2">
                          {item.stock <= 5 ? (
                            <span className="text-orange-400">
                              Only {item.stock} left in stock
                            </span>
                          ) : (
                            <span>Stock: {item.stock} available</span>
                          )}
                        </p>
                      )}

                      {/* Bottom row: Quantity controls and total */}
                      <div className="flex items-center justify-between gap-2 mt-auto">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            max={item.stock || 999}
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                e.target.value,
                                item.stock || 999
                              )
                            }
                            className="w-12 md:w-16 text-center bg-gray-700 text-white border border-gray-600 rounded px-1 md:px-2 py-1 focus:outline-none focus:border-blue-500 text-sm"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                            disabled={
                              item.stock ? item.quantity >= item.stock : false
                            }
                            title={
                              item.stock && item.quantity >= item.stock
                                ? "Maximum stock reached"
                                : ""
                            }
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="text-base md:text-lg font-semibold text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>

                          {/* Delete Button - Mobile */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="md:hidden text-gray-400 hover:text-red-400 transition p-1"
                            title="Remove from cart"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 lg:sticky lg:top-24">
                <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex justify-between text-gray-300 text-sm md:text-base">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 text-sm md:text-base">
                    <span>Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2 md:pt-3 mt-2 md:mt-3">
                    <div className="flex justify-between text-lg md:text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 mb-2 md:mb-3 text-sm md:text-base">
                  Proceed to Checkout
                </button>

                <Link
                  to="/products"
                  className="block text-center text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium transition"
                >
                  Continue Shopping
                </Link>

                {/* Cart Summary */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-600">
                  <div className="flex justify-between text-xs md:text-sm text-gray-400">
                    <span>Items in cart:</span>
                    <span className="text-white font-semibold">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Cart Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 max-w-md w-full mx-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
              Clear Cart?
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Are you sure you want to remove all items from your cart? This
              action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button
                onClick={handleClearCart}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 md:py-2.5 rounded-lg transition text-sm md:text-base"
              >
                Clear Cart
              </button>
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 md:py-2.5 rounded-lg transition text-sm md:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
