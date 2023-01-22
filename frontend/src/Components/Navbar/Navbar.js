import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import GTruck from "../../../src/images/green truck.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="navMainDiv">
        <div className="nSymbol">
          <img className="nSymbolImage" src={GTruck} alt="imagesd" />
          <div className="nName">Ecommerce</div>
        </div>
        <div className="nProducts">Laptops</div>
        <div className="nProducts">Mobiles</div>
        <div className="nProducts">Tvs</div>
        <div className="nProducts">Accessories</div>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "0.25em",
          }}
        >
          <form className="nosubmit" style={{ display: "flex" }}>
            <FiSearch style={{ paddingTop: "1px", marginTop: "4px" }} />
            <input
              className="nosubmit"
              type="search"
              placeholder="Search..."
            ></input>
          </form>
        </div>
        <div className="nProducts">Home</div>
        <div className="nProducts">About</div>
        <div className="navsSignup">
          <button className="navSignup" >
            SignUp
          </button>
        </div>
        <div className="navlLogin">
          <button className="navLogin">
            LogIn
          </button>
        </div>
      </div>
    </>
  )
};

export default Navbar;
