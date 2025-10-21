import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import Seller from "./pages/seller";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import { CartProvider } from "./hooks/CartContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";
// Force rebuild
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
