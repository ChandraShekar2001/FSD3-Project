import React from "react";
import "./display2.css";
import { addItem } from "../../Actions/Cart";
import {useDispatch} from "react-redux"
const ProductCard = (props) => {
  const dispatch=useDispatch();
  const onAddCartHandler=()=>{
    dispatch(addItem(props.id,1))
  }

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
          <div className="productAddToCart poppins" onClick={onAddCartHandler}>Add to cart</div>
        </div>
      </div>
    
  );
};

export default ProductCard;
