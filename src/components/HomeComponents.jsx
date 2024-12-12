import React from "react";
import Home from "./Home";
import Products from "./Products";
import ProductCards from "./ProductCards";
import NewArrivals from "./NewArrivals";

const HomeComponents = () => {
  return (
    <div>
      <Home />
      <Products />
      <ProductCards />
      <NewArrivals />
    </div>
  );
};

export default HomeComponents;
