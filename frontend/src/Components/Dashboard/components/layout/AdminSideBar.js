import React from "react";
import "../styles/AdminSideBar.css";
import {
  BsFillCartFill,
  BsFillCartPlusFill,
  BsFillStarFill,
  BsFillPersonFill,
  BsBoxSeam,
  BsGraphUp,
  BsList,
} from "react-icons/bs";
import { Outlet } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="sideBarMainDiv">
        <input type="checkbox" id="nav-toggle" />
        <div className="sidebar">
          <div className="sidebar-brand">
            <h2>
              <label for="nav-toggle">
                <span>
                  <BsList />
                </span>
              </label>
              {/* <a href="/">
                <span className="eommerceHeading">Admin</span>
              </a> */}
            </h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="/admin/dashboard" className="active">
                  <span>
                    <BsGraphUp />
                  </span>
                  <span>DashBoard</span>
                </a>
              </li>
              <li>
                <a href="/admin/products" className="active">
                  <span>
                    <BsFillCartFill />
                  </span>
                  <span>AllProducts</span>
                </a>
              </li>
              <li>
                <a href="/admin/product" className="active">
                  <span>
                    <BsFillCartPlusFill />
                  </span>
                  <span>CreateProduct</span>
                </a>
              </li>
              <li>
                <a href="/admin/orders" className="active">
                  <span>
                    <BsBoxSeam />
                  </span>
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a href="/admin/users" className="active">
                  <span>
                    <BsFillPersonFill />
                  </span>
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a href="/admin/reviews" className="active">
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>Review</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
