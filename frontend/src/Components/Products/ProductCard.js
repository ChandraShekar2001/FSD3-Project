import React from "react";
import "./display2.css";
const ProductCard = (props) => {
  return (
    
      <div className="productCard" >
        <div className="productImageDiv">
          <div className="productImage">
            <img
              src="https://image01.realme.net/general/20200525/1590396462498.jpg.webp"
              alt=""
              class="pic-lazyload"
            ></img>
          </div>
        </div>
        <div className="productNameDiv poppins"><b>{props.name}</b></div>
        <div className="productPriceDiv poppins"><b>Price : ${props.price} </b></div>
        <div className="productButtonDiv">
          <div className="productAddToCart poppins">Add to cart</div>
        </div>
      </div>
    
  );
};

export default ProductCard;
