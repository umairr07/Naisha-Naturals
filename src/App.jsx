import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import ProductCards from "./components/ProductCards";
import Products from "./components/Products";
import Signup from "./components/Auth-Pages/Signup";
import Login from "./components/Auth-Pages/Login";
import HomeComponents from "./components/HomeComponents";
import Footer from "./components/Footer";
import ContactUs from "./components/Pages/ContactUs";
import Cart from "./components/Pages/Cart";
import ProductsDetails from "./components/Pages/ProductsDetails";
import CategoryProducts from "./components/Pages/CategoryProducts";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter = ["/signup", "/login"];

  const isAuthPage = hideHeaderFooter.includes(location.pathname);

  return (
    <div className="font-title">
      {!hideHeaderFooter.includes(location.pathname) && <Header />}

      <div className={isAuthPage ? "" : "mt-20"}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomeComponents />} />
          {/* Products Page */}
          <Route path="/products" element={<Products />} />
          {/* Product Cards */}
          <Route path="/product-cards" element={<ProductCards />} />
          {/* Products Details */}
          <Route path="/products-details/:id" element={<ProductsDetails />} />
          {/* Products Category */}
          <Route
            path="/products-category/:name"
            element={<CategoryProducts />}
          />
          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          {/* Contact Us Page */}
          <Route path="/contact" element={<ContactUs />} />
          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      {!hideHeaderFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

// Wrap the App component with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
