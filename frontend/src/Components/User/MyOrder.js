import React,{useEffect} from "react";
import "./MyOrder.css";
import MainProfile from "./MainProfile";
import { BsCircleFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import { myOrders } from "../../Actions/Order";
import { useDispatch,useSelector } from "react-redux";
const MyOrder = () => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.user);
  console.log(user._id);
  const navigate=useNavigate()
  const onClickhandler=()=>{
    navigate("/orderstatus")
  }

  useEffect(() => {
    dispatch(myOrders())
  }, [dispatch])
  




  return (
    <div className="myOrderMainDiv" onClick={onClickhandler}>
      <MainProfile />
      <div className="myOrderDispalyDiv">
        <div className="myOrderNameDiv">All orders</div>
        <div className="myOrderContentDisplay">
          <div className="myOrderPhotoDiv">
            <img
              className="myOrderImageDiv"
              src="https://image01.realme.net/general/20200525/1590396462498.jpg.webp"
              alt=""
            />
          </div>
          <div className="myOrderProductDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>
              realme narzo 50 Pro 5G
            </p>
          </div>
          <div className="myOrderPriceDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>$25,000</p>
          </div>
          <div className="myOrderStatusDiv">
            <BsCircleFill
              style={{
                marginTop: "6%",
                marginLeft: "20%",
                color: "green",
                fontSize: "60%",
              }}
            />
            <p style={{ marginTop: "5px", fontSize: "90%", marginLeft: "5px" }}>
              Delivered
            </p>
          </div>
        </div>
        <div className="myOrderContentDisplay">
          <div className="myOrderPhotoDiv">
            <img
              className="myOrderImageDiv"
              src="https://image01.realme.net/general/20200525/1590396462498.jpg.webp"
              alt=""
            />
          </div>
          <div className="myOrderProductDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>
              realme narzo 50 Pro 5G
            </p>
          </div>
          <div className="myOrderPriceDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>$25,000</p>
          </div>
          <div className="myOrderStatusDiv">
            <BsCircleFill
              style={{
                marginTop: "6%",
                marginLeft: "20%",
                color: "orange",
                fontSize: "60%",
              }}
            />
            <p style={{ marginTop: "5px", fontSize: "90%", marginLeft: "5px" }}>
              Shipped
            </p>
          </div>
        </div>
        <div className="myOrderContentDisplay">
          <div className="myOrderPhotoDiv">
            <img
              className="myOrderImageDiv"
              src="https://image01.realme.net/general/20200525/1590396462498.jpg.webp"
              alt=""
            />
          </div>
          <div className="myOrderProductDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>
              realme narzo 50 Pro 5G
            </p>
          </div>
          <div className="myOrderPriceDiv">
            <p style={{ marginTop: "5px", fontSize: "90%" }}>$25,000</p>
          </div>
          <div className="myOrderStatusDiv">
            <BsCircleFill
              style={{
                marginTop: "6%",
                marginLeft: "20%",
                color: "red",
                fontSize: "60%",
              }}
            />
            <p style={{ marginTop: "5px", fontSize: "90%", marginLeft: "5px" }}>
              Cancelled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
