import { useState, useEffect } from "react";
import Navbar from "../layouts/navbar";
import InteractiveButton from "../components/InteractiveButton";
import side1 from "../assets/imgs/home/side1.jpg";
import side2 from "../assets/imgs/home/side2.jpg";
import side3 from "../assets/imgs/home/side3.jpg";
import side4 from "../assets/imgs/home/side4.jpg";
import background from "../assets/imgs/home/background2.jpg";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background with fallback img for iOS */}
      <div className="bg">
        <img
          src={background}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.1) saturate(1.2)",
            zIndex: -1,
          }}
        />
      </div>
      <Navbar />
      <div className="relative z-10">
        {/* Hero Section */}
        <div
          className={`flex flex-col transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1 className="text-white mt-32 sm:mt-40 md:mt-48 lg:mt-60 text-2xl sm:text-3xl md:text-4xl pb-2 font-bold text-center px-4">
              Discover Unique Handmade Creations Crafted with Love.
            </h1>
            <p className="container text-white text-sm sm:text-base w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] text-center m-auto px-4">
              Handcrafted by talented artisans, each piece brings warmth,
              creativity, and meaning to your life.
            </p>
          </div>
        </div>

        {/* Feature Cards with Images */}
        <div className="scroll-feature-card" id="feature1">
          <img src={side1} alt="Handmade Jewelry" className="feature-image" />
          <div className="feature-content">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Unique Jewelry
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              Handcrafted accessories that tell your story. Each piece is
              meticulously designed with attention to detail and passion.
            </p>
          </div>
        </div>

        <div className="scroll-feature-card" id="feature2">
          <div className="feature-content">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Artisan Ceramics
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              Beautiful pottery and ceramics crafted by skilled hands. Perfect
              for your home or as thoughtful gifts.
            </p>
          </div>
          <img src={side2} alt="Ceramics" className="feature-image" />
        </div>

        {/* Stats Section */}
        <div className="scroll-stats-container" id="stats">
          <div className="stat-card">
            <div className="stat-number text-white">500+</div>
            <div className="stat-label text-gray-200">Unique Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-white">200+</div>
            <div className="stat-label text-gray-200">Talented Artisans</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-white">1000+</div>
            <div className="stat-label text-gray-200">Happy Customers</div>
          </div>
        </div>

        {/* Category Showcase */}
        <div className="scroll-category-card" id="category1">
          <img src={side3} alt="Home Decor" className="category-image" />
          <div className="category-overlay">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Home Decor
            </h3>
            <p className="text-gray-200 mt-2 text-sm sm:text-base">
              Transform your space with handcrafted elegance
            </p>
          </div>
        </div>

        <div className="scroll-category-card" id="category2">
          <img src={side4} alt="Textiles" className="category-image" />
          <div className="category-overlay">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Textiles & More
            </h3>
            <p className="text-gray-200 mt-2 text-sm sm:text-base">
              Handwoven fabrics and cozy creations
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`flex flex-col transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className=" flex flex-col m-auto justify-center mt-10 gap-6 sm:gap-9 pb-20 px-4">
            <div>
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Let's Begin!
              </h1>
              <p className="text-center text-gray-200 mt-4 text-base sm:text-lg">
                Join our community of creators and collectors
              </p>
            </div>
            <div className="flex flex-row sm:flex-row flex-nowrap gap-3 sm:gap-2 justify-center items-center">
              <InteractiveButton to="/products" variant="primary">
                Shop Now
              </InteractiveButton>
              <InteractiveButton to="/seller" variant="secondary">
                Sell Your Craft
              </InteractiveButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
