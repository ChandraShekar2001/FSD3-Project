import React, { useEffect, useState } from "react";
import "./orderStatus.css";

const OrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState("Shipped");
  const [progressStatus, setprogressStatus] = useState({
    currentStatus1: "",
    currentStatus2: "",
    currentStatus3: "",
    currentStatus4: "",
    statusDescription: "",
  });

  const orderStatusHandler = () => {
    if (orderStatus === "Ordered Confirmed") {
      setprogressStatus({
        currentStatus1: "current-item",
        currentStatus2: "",
        currentStatus3: "",
        statusDescription: "Your order confirmed",
      });
    } else if (orderStatus === "Shipped") {
      setprogressStatus({
        currentStatus1: "",
        currentStatus2: "current-item",
        currentStatus3: "",
        currentStatus4: "",
        statusDescription: "Your item is shipped",
      });
    } else if (orderStatus === "Out For Delivery") {
      setprogressStatus({
        currentStatus1: "",
        currentStatus2: "",
        currentStatus3: "current-item",
        currentStatus4: "",
        statusDescription: "Your item is out for delivery",
      });
    } else if (orderStatus === "Delivered") {
      setprogressStatus({
        currentStatus1: "",
        currentStatus2: "",
        currentStatus3: "",
        currentStatus4: "current-item",
        statusDescription: "Your item is delivered",
      });
    }
  };

  useEffect(() => {
    orderStatusHandler();
  }, []);

  return (
    <>
      <div className="OrderStatusContainer">
        <div className="orderStatusInnerContainerr">
          <div className="topOrderStatus">
            <div className="deliveryAddress">
              <h3>Delivery Address</h3>
              <h3>DINESH N</h3>
              <p>
                ROOM NO -117,BH2 IIITS Boys Hostel,Sricity - 51232 ,Andhra
                Pradesh
              </p>
              <p>
                <span style={{ marginRight: "1rem" }}>
                  <b>Phone number</b>
                </span>
                <span>9932929494</span>
              </p>
            </div>
            <div className="yourRewards">
              <h3>Your Rewards</h3>
              <div className="YourRewardsImag">
                <div className="rewardImg">
                  <img
                    src="https://thumbs.dreamstime.com/b/game-coin-gold-lightning-symbol-icon-interface-metal-web-application-gui-ui-vector-167316578.jpg"
                    style={{ width: 40, height: 40 }}
                  />
                </div>
                <div className="rewardText">
                  <p>
                    ₹51 Saved Using SuperCoins <span>51 coins paid</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomOrderStatus">
            <div className="productDetails">
              <div className="orderStatusImg">
                <img
                  src="https://image01.realme.net/general/20200525/1590396462498.jpg.webp"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="orderStatusDetails1">
                <p>Apple MacBook(8Gb RAM,256GB SSD,33.78cm)</p>
                <span>
                  ₹1,400 +
                  <img
                    src="https://thumbs.dreamstime.com/b/game-coin-gold-lightning-symbol-icon-interface-metal-web-application-gui-ui-vector-167316578.jpg"
                    style={{ width: 20, height: 20, objectFit: "contain" }}
                  />
                  50
                </span>
              </div>
            </div>
            <div className="progressBar">
              <section className="step-wizard">
                <ul className="step-wizard-list">
                  <li className={"step-wizard-item "}>
                    <span className="progress-count">1</span>
                    <span className="progress-label">Order Confirmed</span>
                  </li>
                  <li
                    className={
                      "step-wizard-item " + progressStatus.currentStatus1
                    }
                  >
                    <span className="progress-count">2</span>
                    <span className="progress-label">Shipped</span>
                  </li>
                  <li
                    className={
                      "step-wizard-item " + progressStatus.currentStatus2
                    }
                  >
                    <span className="progress-count">3</span>
                    <span className="progress-label">Out For Delivery</span>
                  </li>
                  <li
                    className={
                      "step-wizard-item " + progressStatus.currentStatus3
                    }
                  >
                    <span className="progress-count">4</span>
                    <span className="progress-label">Delivered</span>
                  </li>
                </ul>
                <div className="underLineInProgressBar"></div>
                <div className="currentProgressStatus">
                  <p>{progressStatus.statusDescription}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
