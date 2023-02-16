import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { RxPlus } from "react-icons/rx";
import { RxMinus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Actions/Cart";
import Afooter from "../Home/Afooter";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id) => {
    dispatch(addItem(id, 1));
  };
  const decrementHandler = (id) => {
    dispatch(removeItem(id));
  };

  var total=0;
  cartItems.map((i)=>{
    total=total+(i.price*i.quantity)
  }
  )

  const shippingCost=30;
  console.log(total);

  return (
    <>
    <div className="myCartMainDiv">
    {cartItems.length >0?
      <div className="myCartContentDiplay">
      <div className="myCartNameDiv">
        <FiShoppingCart style={{ paddingBottom: "3px" }} />
        <span style={{ marginLeft: "1%" }}>Cart items</span>
      </div>
      <div className="myCartContentDiv">
        <div className="myCartProductDiv">
          <div className="myCartProductDescription">
            <div className="myCartProductProducts">Products</div>
            <div className="myCartProductQuantity">Quantity</div>
            <div className="myCartProductPrice">Price</div>
          </div>
          {cartItems.map((i) => (
            <div className="myCartProducts">
              <div className="myCartContentDisplay">
                <div className="myCartPhotoDiv">
                  <img
                    className="myCartImageDiv"
                    src="https://image01.realme.net/general/20220829/1661751207954.png.webp"
                    alt=""
                  />
                </div>
                <div className="myCartProductDiv">
                  <p style={{ marginTop: "24%", fontSize: "90%" }}>
                    {i.name}
                  </p>
                </div>
                <div className="myCartStatusDiv">
                  <div className="quantityDiv">
                    <div
                      className="quantityPlus"
                      onClick={() => decrementHandler(i.id)}
                    >
                      <RxMinus />
                    </div>
                    <div className="quantitynumber">{i.quantity}</div>
                    <div
                      className="quantityminus"
                      onClick={() => incrementHandler(i.id, i.quantity)}
                    >
                      <RxPlus />
                    </div>
                  </div>
                </div>
                <div className="myCartPriceDiv">
                  <p style={{ marginTop: "5px", fontSize: "90%" }}>
                    ${i.quantity * i.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="myCartSummaryDiv">
          <div className="myCartSummaryName">Summary</div>
          <div className="myCartSummaryDetails">
            <p>
              Total products : <span className="moneySpan">${total}</span>
            </p>
            <p>
              Shipping cost <span style={{ marginLeft: "8.5px" }}>:</span>{" "}
              <span className="moneySpan">${shippingCost}</span>
            </p>
            <h6>
              Apply coupan{" "}
              <span>
                <IoIosArrowForward />
              </span>{" "}
            </h6>
          </div>
          <div className="myCartSummaryTotal">
            <p>
              Total price <span style={{ marginLeft: "10.5%" }}>:</span>
              <span className="moneySpanTotal">${total+shippingCost}</span>
            </p>
          </div>
          <div className="myCartCheckOut">
            <p>Checkout</p>
          </div>
        </div>
      </div>

    </div>
      :
      <h1>No items in cart</h1>
      
      }
     
    </div>
    {/* <Afooter/> */}
    </>

  );
};


export default Cart;
