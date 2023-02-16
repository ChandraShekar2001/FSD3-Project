import React, { useEffect } from "react";
import "./Products.css";
import "./display2.css";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../Actions/Product";
import Card from "./Card.js"
import Afooter from "../Home/Afooter";
const Products = (props) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions());
  }, [dispatch]);
  const { products } = useSelector((state) => state.product);

  return (
    <>
    <div style={{ display: "flex", backgroundColor: "#f1f1f36" }}>
      <Filter />
      <div className="productMainDiv">
        {products.map((i) => 
        <ProductCard name={i.name} price={i.price} id={i._id} key={i._id} />
        )}
      </div>  
    </div>
    </>
  );
};

export default Products;
