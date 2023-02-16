import React from "react";
import "./card.css";
import { BsStarFill, BsCart } from "react-icons/bs";
const Card = (props) => {
  return (
      <div class="card" style={{ width: "14rem", border:"1px",padding:"0.8rem"}}>
        <div className="imgCardDiv" style={{ width: "200px", height: "200px" }}>
          <img
            src="https://image01.realme.net/general/20200630/1593487442773.jpg.webp"
            class="card-img-top"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="rating-card">
          <div>
            <p>4.2</p>
          </div>
          <div>
            <p>
              <BsStarFill style={{ background: "rgba(241, 243, 245, 0)" }} />
            </p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>7.3k</p>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Roadster</h5>
          <button className="addToCartBtn">
            <BsCart style={{ marginRight: "0.3rem" }} />
            Add To Cart
          </button>
          <h6>
            Rs. 799{" "}
            <span>
              <s>Rs. 1299</s>
            </span>
            <span className="offerPercent"> (40% OFF)</span>
          </h6>
        </div>
      </div>
  );
};

export default Card;
