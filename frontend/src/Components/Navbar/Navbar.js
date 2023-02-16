import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import GTruck from "../../../src/images/green truck.png";
import { FiSearch } from "react-icons/fi";
import Badge from "@material-ui/core/Badge";
import { FiShoppingCart } from "react-icons/fi";
import { BsFolderPlus } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../Actions/User";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  var itemsNumber = 0;
  cartItems.map((i) => {
    itemsNumber = itemsNumber + i.quantity;
  });
  const navigate = useNavigate();
  const myProfileHandler = () => {
    navigate("/profile");
  };

  const myOrdersHandler = () => {
    navigate("/myorderprofile");
  };
  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  const gotoCartHandler = () => {
    navigate("/mycart");
  };

  const gotoHomeHandler = () => {
    navigate("/");
  };

  var css = "";
  if (user.role === "admin") {
    css = "dropdown-content-dash";
  } else {
    css = "dropdown-content";
  }

  const gotoDashboardHandler=()=>{
    navigate('/admin');
  }

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
        <div className="nProducts" onClick={gotoHomeHandler}>
          Home
        </div>
        <div className="nProducts">About</div>
        {/* <div className="navsSignup">
          <button className="navSignup" >
            SignUp
          </button>
        </div> */}
        <div className="navlLogin">
          <button className="navLogin">
            <FaUserCircle style={{ marginTop: "4px", fontSize: "150%" }} />
            <div className={css}>
              <div className="dropDownDiv" onClick={myProfileHandler}>
                <CgProfile />
                <span style={{ paddingLeft: "7px" }}>Account</span>
              </div>
              <div className="dropDownDiv" onClick={myOrdersHandler}>
                <BsFolderPlus />
                <span style={{ paddingLeft: "7px" }}>Orders</span>
              </div>
              <div className="dropDownDiv">
                <BsPower style={{ color: "red" }} />
                <span style={{ paddingLeft: "7px" }} onClick={logOutHandler}>
                  Logout
                </span>
              </div>
              {user.role === "admin" && (
                <div className="dropDownDiv">
                  <MdDashboard />
                  <span style={{ paddingLeft: "7px" }} onClick={gotoDashboardHandler}>Dashboard</span>
                </div>
              )}
            </div>
          </button>
        </div>
        <div
          style={{ marginRight: "1%", cursor: "pointer" }}
          onClick={gotoCartHandler}
        >
          {itemsNumber > 0 ? (
            <Badge color="secondary" badgeContent={itemsNumber}>
              {/* <ShoppingCartIcon />{" "} */}
              <FiShoppingCart style={{ fontSize: "140%" }} />
            </Badge>
          ) : (
            <Badge color="secondary" badgeContent={"0"}>
              {/* <ShoppingCartIcon />{" "} */}
              <FiShoppingCart style={{ fontSize: "140%" }} />
            </Badge>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
