import React, { useEffect } from "react";
import "../components/styles/processOrder.css";
import { BsClipboardCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { getAllOrders } from "../../../Actions/Order";
import { useDispatch, useSelector } from "react-redux";
const ProcessOrder = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  const orderItems=props.orderItems
  var price=0;
  const taxPrice=200;
  const shippingPrice=50;
  orderItems.map((i)=>
  price=price+i.price
  )
  price=price+taxPrice+shippingPrice
  const Address = props.shippingInfo.city.concat(
    ",",
    props.shippingInfo.state,
    ",",
    props.shippingInfo.country,
    ",",
    props.shippingInfo.pinCode
  );
  return (
    <>
      <div className="shippingDetails">
        <span>
          <FaShippingFast
            style={{
              fontSize: "2rem",
              marginRight: "10px",
            }}
          />
          Shipping Info
        </span>
      </div>
      <div className="processOrderContainer">
        <div className="shipingInfo">
          <div className="processHeading">
            <h3>Delivery Address</h3>
            <p className="details">Name: {user.name}</p>
            <p className="details">Phone: {props.shippingInfo.phoneNo}</p>
            <p className="details">Address: {Address}</p>
          </div>
          <div className="processHeading">
            <h3>Payment</h3>
            <p className="details" style={{ color: "green" }}>
              PAID
            </p>
            <p className="details">Amount: {price}</p>
          </div>
          <div className="processHeading">
            <h3>Order Status</h3>
            <p className="details" style={{ color: "red" }}>
              {props.status}
            </p>
          </div>
          <div className="processHeading">
            <h3>Your Cart Items:</h3>
            {orderItems.map((i) => 
              <div className="allOrderedProducts">
                <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&w=1000&q=80" />
                <div className="details">
                  {i.name}<br></br>
                  <div style={{ display: "flex" }}>
                    <h6 style={{ marginTop: "8px" }}>Price : </h6>
                    <p>{i.quantity * i.price}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="splitTwoDivsLine"></div> */}
        <div className="processOrder">
          <div className="processOrderForm">
            <form>
              <h2>Process Order</h2>
              <div>
                <span>
                  <BsClipboardCheck />
                </span>
                <select>
                  <option value="delivered">Delivered</option>
                  <option value="processed">Processed</option>
                </select>
              </div>
              <button type="submit">Process</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessOrder;
