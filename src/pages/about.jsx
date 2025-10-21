import Navbar from "../layouts/navbar";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-900 text-white py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Celebrating Handmade Craftsmanship
          </h1>
          <p className="text-xl opacity-90">
            Connecting talented artisans with people who value quality,
            authenticity, and the human touch
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 transition-colors duration-300">
                At HandMade, we believe that every handcrafted item tells a
                story. Our mission is to preserve traditional craftsmanship
                while empowering artisans to build sustainable businesses in the
                digital age.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 transition-colors duration-300">
                We're more than just a marketplace—we're a community that
                celebrates creativity, quality, and the unique connection
                between maker and buyer. Every purchase supports real people
                pursuing their passion and keeping traditional skills alive.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-300">
                When you buy handmade, you're not just getting a product; you're
                getting a piece of someone's heart and soul, crafted with care
                and attention to detail that mass production simply can't match.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
                alt="Artisan working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors duration-300">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Community First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                We prioritize building meaningful relationships between artisans
                and customers, fostering a supportive community where everyone
                thrives.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Quality & Authenticity
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Every item on our platform is genuinely handmade. We carefully
                vet our artisans to ensure only the highest quality
                craftsmanship.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Sustainability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                We encourage eco-friendly practices, sustainable materials, and
                mindful consumption that benefits both people and the planet.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                While honoring traditional techniques, we embrace modern tools
                and technology to help artisans reach wider audiences.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Fair Trade
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                We believe in fair compensation for artisans, maintaining low
                fees so creators keep most of what they earn.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Passion & Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                We celebrate the dedication and love that goes into every
                handcrafted piece, connecting makers with customers who
                appreciate their art.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-900 rounded-lg p-12 mb-16 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Active Artisans</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-90">Products Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$5M+</div>
              <div className="text-lg opacity-90">Paid to Artisans</div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6 transition-colors duration-300">
              Our Story
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                HandMade was born from a simple observation: in an increasingly
                digital world, people were craving authentic, meaningful
                connections and unique items that reflect their values.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                Our founders, themselves artisans and craft enthusiasts, saw
                talented makers struggling to reach customers while
                mass-produced items dominated the market. They envisioned a
                platform that would level the playing field—where quality and
                craftsmanship matter more than marketing budgets.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                Since launching in 2020, we've grown from a small community of
                50 artisans to a thriving marketplace of thousands. But our core
                mission remains unchanged: to celebrate handmade craftsmanship,
                support independent makers, and help customers discover products
                made with heart and soul.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Today, every purchase on HandMade doesn't just support an
                artisan—it supports a movement toward mindful consumption,
                sustainable production, and preserving the beautiful tradition
                of handmade crafts for generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-12 shadow-md border border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Join Our Community
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300">
            Whether you're an artisan looking to share your craft or a customer
            seeking unique, handmade treasures, there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button variant="primary" className="px-8 py-3">
                Shop Products
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" className="px-8 py-3">
                Become a Seller
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
