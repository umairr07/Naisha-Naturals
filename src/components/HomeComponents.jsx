import React from "react";
import Home from "./Home";
import Products from "./Products";
import ProductCards from "./ProductCards";
import NewArrivals from "./NewArrivals";
import { BestSeller } from "./BestSeller";

const HomeComponents = () => {
  return (
    <div>
      <Home />
      {/* <Products /> */}
      <ProductCards />
      <BestSeller />
      <NewArrivals />
    </div>
  );
};

export default HomeComponents;
