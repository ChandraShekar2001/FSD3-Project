import React from "react";
import "./Products.css";
 import "./display2.css";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
const Products = () => {

  return (
    <div style={{ display: "flex", backgroundColor: "#f1f1f36" }}>
      <Filter/>
      <div className="productMainDiv">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>  
      </div>
    </div>
  );
};

export default Products;
