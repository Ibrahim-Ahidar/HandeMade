import { useState } from "react";
import Navbar from "../layouts/navbar";
import Button from "../components/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

function Seller() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for dashboard
  const [stats] = useState({
    totalSales: 12450.75,
    totalOrders: 89,
    totalProducts: 15,
    totalRevenue: 15680.25,
    monthlyGrowth: 23.5,
    weeklyGrowth: 8.2,
  });

  const [topProducts] = useState([
    {
      id: 1,
      name: "Handmade Ceramic Vase",
      sales: 45,
      revenue: 675.0,
      target: 50,
      category: "Pottery",
    },
    {
      id: 2,
      name: "Artisan Wooden Bowl",
      sales: 38,
      revenue: 570.0,
      target: 40,
      category: "Woodwork",
    },
    {
      id: 3,
      name: "Macrame Wall Hanging",
      sales: 32,
      revenue: 480.0,
      target: 35,
      category: "Textiles",
    },
    {
      id: 4,
      name: "Leather Wallet",
      sales: 28,
      revenue: 420.0,
      target: 30,
      category: "Leather",
    },
  ]);

  const [recentOrders] = useState([
    {
      id: "ORD-001",
      customer: "Sarah Johnson",
      product: "Handmade Ceramic Vase",
      quantity: 2,
      total: 45.0,
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      customer: "Mike Chen",
      product: "Artisan Wooden Bowl",
      quantity: 1,
      total: 35.0,
      status: "Processing",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      customer: "Emma Wilson",
      product: "Macrame Wall Hanging",
      quantity: 1,
      total: 28.0,
      status: "Shipped",
      date: "2024-01-13",
    },
    {
      id: "ORD-004",
      customer: "David Brown",
      product: "Leather Wallet",
      quantity: 3,
      total: 75.0,
      status: "Completed",
      date: "2024-01-12",
    },
  ]);

  const [monthlyData] = useState([
    { month: "Jul", sales: 1200, orders: 12 },
    { month: "Aug", sales: 1450, orders: 15 },
    { month: "Sep", sales: 1800, orders: 18 },
    { month: "Oct", sales: 2100, orders: 22 },
    { month: "Nov", sales: 1950, orders: 20 },
    { month: "Dec", sales: 2350, orders: 24 },
  ]);

  // Form data for selling
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-900/30 text-green-300 border-green-500/50";
      case "Processing":
        return "bg-yellow-900/30 text-yellow-300 border-yellow-500/50";
      case "Shipped":
        return "bg-blue-900/30 text-blue-300 border-blue-500/50";
      default:
        return "bg-gray-900/30 text-gray-300 border-gray-500/50";
    }
  };

  // Chart configurations
  const monthlySalesChartData = {
    labels: monthlyData.map((d) => d.month),
    datasets: [
      {
        label: "Sales ($)",
        data: monthlyData.map((d) => d.sales),
        backgroundColor: "rgba(147, 51, 234, 0.8)",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        yAxisID: "y",
      },
      {
        label: "Orders",
        data: monthlyData.map((d) => d.orders),
        backgroundColor: "rgba(34, 197, 94, 0.8)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        yAxisID: "y1",
      },
    ],
  };

  const monthlySalesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(147, 51, 234, 1)",
          callback: function (value) {
            return "$" + value;
          },
        },
        title: {
          display: true,
          text: "Sales ($)",
          color: "rgba(147, 51, 234, 1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "rgba(34, 197, 94, 1)",
        },
        title: {
          display: true,
          text: "Orders",
          color: "rgba(34, 197, 94, 1)",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const salesTrendChartData = {
    labels: monthlyData.map((d) => d.month),
    datasets: [
      {
        label: "Sales Trend",
        data: monthlyData.map((d) => d.sales),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const salesTrendChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const categoryDistributionData = {
    labels: topProducts.map((p) => p.category),
    datasets: [
      {
        data: topProducts.map((p) => p.sales),
        backgroundColor: [
          "rgba(147, 51, 234, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgba(147, 51, 234, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const categoryDistributionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      console.log("Product listed:", formData);
      setIsSubmitted(true);
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
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const DashboardContent = () => (
    <div className="space-y-4 md:space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Total Sales</p>
              <p className="text-lg md:text-2xl font-bold text-white">
                ${stats.totalSales.toLocaleString()}
              </p>
              <p className="text-green-400 text-xs md:text-sm">
                +{stats.monthlyGrowth}%
              </p>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm md:text-xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Total Orders</p>
              <p className="text-lg md:text-2xl font-bold text-white">
                {stats.totalOrders}
              </p>
              <p className="text-blue-400 text-xs md:text-sm">
                +{stats.weeklyGrowth}%
              </p>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm md:text-xl">📦</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs md:text-sm">
                Active Products
              </p>
              <p className="text-lg md:text-2xl font-bold text-white">
                {stats.totalProducts}
              </p>
              <p className="text-purple-400 text-xs md:text-sm">Live</p>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm md:text-xl">🛍️</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Total Revenue</p>
              <p className="text-lg md:text-2xl font-bold text-white">
                ${stats.totalRevenue.toLocaleString()}
              </p>
              <p className="text-orange-400 text-xs md:text-sm">All time</p>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm md:text-xl">📈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Sales Analytics Chart */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
            Sales Analytics
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
            Monthly sales and orders comparison
          </p>
          <div className="h-48 md:h-80">
            <Bar
              data={monthlySalesChartData}
              options={monthlySalesChartOptions}
            />
          </div>
        </div>

        {/* Sales Trend Chart */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
            Sales Trend
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
            Revenue growth over time
          </p>
          <div className="h-48 md:h-80">
            <Line data={salesTrendChartData} options={salesTrendChartOptions} />
          </div>
        </div>
      </div>

      {/* Second Row - Category Distribution and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Category Distribution */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
            Category Distribution
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
            Sales by product category
          </p>
          <div className="h-48 md:h-80">
            <Doughnut
              data={categoryDistributionData}
              options={categoryDistributionOptions}
            />
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
            Best Selling Products
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
            Top performers this month
          </p>

          <div className="space-y-3 md:space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-2 md:p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm md:text-base truncate">
                    {product.name}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {product.category}
                  </p>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <div className="flex-1 bg-gray-700/30 rounded-full h-1.5 md:h-2">
                      <div
                        className="bg-gradient-to-r from-green-600 to-green-700 h-1.5 md:h-2 rounded-full"
                        style={{
                          width: `${(product.sales / product.target) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">
                      {product.sales}/{product.target}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-2 md:ml-4">
                  <p className="text-white font-bold text-sm md:text-base">
                    ${product.revenue}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {product.sales} sold
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
          Recent Orders
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
          Latest customer orders
        </p>

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Order ID
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Customer
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Product
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Qty
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Total
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Status
                </th>
                <th className="text-left text-gray-400 font-medium py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-2 md:py-4 px-2 md:px-0 text-white font-mono text-xs md:text-sm">
                    {order.id}
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0 text-white text-xs md:text-base">
                    {order.customer}
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0 text-gray-300 text-xs md:text-base">
                    {order.product}
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0 text-gray-300 text-xs md:text-base">
                    {order.quantity}
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0 text-white font-medium text-xs md:text-base">
                    ${order.total}
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0">
                    <span
                      className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-0 text-gray-400 text-xs md:text-sm">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const SellContent = () => (
    <div className="max-w-3xl mx-auto">
      {/* Product Listing Form */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-8 border border-white/10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
          Add New Product
        </h2>

        {isSubmitted && (
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-900/30 border border-green-500/50 text-green-300 rounded-lg backdrop-blur-sm text-sm md:text-base">
            ✓ Success! Your product has been listed and is now live on the
            marketplace!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Product Image */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              Product Image *
            </label>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
              <label htmlFor="images" className="cursor-pointer">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-dashed border-white/30 hover:border-white/50 flex items-center justify-center bg-white/5 overflow-hidden transition-all">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl mb-1">📸</div>
                      <p className="text-xs text-gray-400">Upload</p>
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
              <p className="text-xs md:text-sm text-gray-300">
                Upload a clear image of your product. JPG, PNG accepted.
              </p>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="block text-xs md:text-sm font-semibold text-white mb-2"
            >
              Product Name *
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className={`w-full p-2 md:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 text-sm md:text-base ${
                errors.productName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/20 focus:ring-white/40"
              }`}
              placeholder="e.g., Handmade Ceramic Vase"
            />
            {errors.productName && (
              <p className="text-red-400 text-xs md:text-sm mt-1">
                {errors.productName}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs md:text-sm font-semibold text-white mb-2"
            >
              Product Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 md:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 text-sm md:text-base ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/20 focus:ring-white/40"
              }`}
              placeholder="Describe your product, materials used, and what makes it special..."
            ></textarea>
            {errors.description && (
              <p className="text-red-400 text-xs md:text-sm mt-1">
                {errors.description}
              </p>
            )}
            <p className="text-xs text-gray-400 mt-1">Minimum 20 characters</p>
          </div>

          {/* Price Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-xs md:text-sm font-semibold text-white mb-2"
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
                className={`w-full p-2 md:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 text-sm md:text-base ${
                  errors.price
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-white/40"
                }`}
                placeholder="29.99"
              />
              {errors.price && (
                <p className="text-red-400 text-xs md:text-sm mt-1">
                  {errors.price}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="originalPrice"
                className="block text-xs md:text-sm font-semibold text-white mb-2"
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
                className="w-full p-2 md:p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-gray-500 text-sm md:text-base"
                placeholder="39.99"
              />
              <p className="text-xs text-gray-400 mt-1">
                For showing discounts
              </p>
            </div>
          </div>

          {/* Category and Stock Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-xs md:text-sm font-semibold text-white mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full p-2 md:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white text-sm md:text-base ${
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
                <p className="text-red-400 text-xs md:text-sm mt-1">
                  {errors.category}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="stock"
                className="block text-xs md:text-sm font-semibold text-white mb-2"
              >
                Stock Quantity *
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className={`w-full p-2 md:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 text-sm md:text-base ${
                  errors.stock
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-white/40"
                }`}
                placeholder="10"
              />
              {errors.stock && (
                <p className="text-red-400 text-xs md:text-sm mt-1">
                  {errors.stock}
                </p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label
              htmlFor="tags"
              className="block text-xs md:text-sm font-semibold text-white mb-2"
            >
              Tags (Optional)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-2 md:p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-gray-500 text-sm md:text-base"
              placeholder="handmade, ceramic, unique, gift"
            />
            <p className="text-xs text-gray-400 mt-1">
              Separate tags with commas
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 md:py-4 text-base md:text-lg"
          >
            List Product Now
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
            Seller Portal
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Manage your products and track your sales performance
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-4 md:mb-8">
          <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === "dashboard"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === "sell"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ➕ Add Product
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "dashboard" ? <DashboardContent /> : <SellContent />}
      </div>
    </div>
  );
}

export default Seller;
