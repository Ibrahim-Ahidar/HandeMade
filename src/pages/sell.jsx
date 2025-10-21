import { useState } from "react";
import Navbar from "../layouts/navbar";
import Button from "../components/Button";

function Sell() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "",
    stock: "",
    tags: "",
    images: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        images: file,
      }));
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please provide at least 20 characters";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Please enter a valid price";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.stock) {
      newErrors.stock = "Stock quantity is required";
    } else if (isNaN(formData.stock) || parseInt(formData.stock) < 0) {
      newErrors.stock = "Please enter a valid stock quantity";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log("Product listed:", formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        productName: "",
        description: "",
        price: "",
        originalPrice: "",
        category: "",
        stock: "",
        tags: "",
        images: null,
      });
      setImagePreview(null);
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            List Your Handmade Craft
          </h1>
          <p className="text-xl opacity-90">
            Share your unique creations with thousands of customers who value
            handmade quality
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-white mb-2">Fill the Form</h3>
              <p className="text-sm text-gray-300">
                Add your product details, images, and pricing information below
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-white mb-2">List Instantly</h3>
              <p className="text-sm text-gray-300">
                Your product goes live immediately - no waiting for approval
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-white mb-2">Start Earning</h3>
              <p className="text-sm text-gray-300">
                Receive orders and manage your sales through your dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Product Listing Form */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            List Your Product
          </h2>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 text-green-300 rounded-lg backdrop-blur-sm">
              ✓ Success! Your product has been listed and is now live on the
              marketplace!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Image */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Product Image *
              </label>
              <div className="flex items-center gap-4">
                <label htmlFor="images" className="cursor-pointer">
                  <div className="w-32 h-32 rounded-lg border-2 border-dashed border-white/30 hover:border-white/50 flex items-center justify-center bg-white/5 overflow-hidden transition-all">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-3xl mb-1">📸</div>
                        <p className="text-xs text-gray-400">Upload Image</p>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <p className="text-sm text-gray-300">
                  Upload a clear image of your product. JPG, PNG accepted.
                </p>
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-semibold text-white mb-2"
              >
                Product Name *
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className={`w-full p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                  errors.productName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-white/40"
                }`}
                placeholder="e.g., Handmade Ceramic Vase"
              />
              {errors.productName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.productName}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-white mb-2"
              >
                Product Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-white/40"
                }`}
                placeholder="Describe your product, materials used, and what makes it special..."
              ></textarea>
              {errors.description && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.description}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-1">
                Minimum 20 characters
              </p>
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Price (USD) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    errors.price
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/20 focus:ring-white/40"
                  }`}
                  placeholder="29.99"
                />
                {errors.price && (
                  <p className="text-red-400 text-sm mt-1">{errors.price}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="originalPrice"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Original Price (Optional)
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="originalPrice"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-gray-500"
                  placeholder="39.99"
                />
                <p className="text-xs text-gray-400 mt-1">
                  For showing discounts
                </p>
              </div>
            </div>

            {/* Category and Stock Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white ${
                    errors.category
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/20 focus:ring-white/40"
                  }`}
                >
                  <option value="" className="bg-gray-900">
                    Select category
                  </option>
                  <option value="jewelry" className="bg-gray-900">
                    Jewelry
                  </option>
                  <option value="pottery" className="bg-gray-900">
                    Pottery
                  </option>
                  <option value="textiles" className="bg-gray-900">
                    Textiles
                  </option>
                  <option value="woodwork" className="bg-gray-900">
                    Woodwork
                  </option>
                  <option value="leather" className="bg-gray-900">
                    Leather Goods
                  </option>
                  <option value="paintings" className="bg-gray-900">
                    Paintings
                  </option>
                  <option value="mixed-materials" className="bg-gray-900">
                    Mixed Materials
                  </option>
                </select>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    errors.stock
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/20 focus:ring-white/40"
                  }`}
                  placeholder="10"
                />
                {errors.stock && (
                  <p className="text-red-400 text-sm mt-1">{errors.stock}</p>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-semibold text-white mb-2"
              >
                Tags (Optional)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-gray-500"
                placeholder="handmade, ceramic, unique, gift"
              />
              <p className="text-xs text-gray-400 mt-1">
                Separate tags with commas
              </p>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-lg"
            >
              List Product Now
            </Button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Is my product listed immediately?
              </h3>
              <p className="text-gray-300">
                Yes! Once you submit the form, your product goes live on the
                marketplace immediately. No waiting for approval.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                What are the fees?
              </h3>
              <p className="text-gray-300">
                We charge a small 5% commission on each sale, plus a $0.20
                transaction fee. No monthly fees or listing fees.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                How do I manage my listings?
              </h3>
              <p className="text-gray-300">
                You'll have access to a seller dashboard where you can edit
                products, manage inventory, and track your sales.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Can I list multiple products?
              </h3>
              <p className="text-gray-300">
                Absolutely! List as many products as you want. Each one goes
                live immediately after submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;
