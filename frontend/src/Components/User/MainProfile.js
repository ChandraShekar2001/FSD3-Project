import React from "react";
import "./Profile.css";
import testimg from "../../images/images.jpg";
import { RiFolderUserFill } from "react-icons/ri";
import {BsFolderPlus} from "react-icons/bs"
import {BsWallet2} from "react-icons/bs"
import {BsPower} from "react-icons/bs"
import {RiLockPasswordLine} from "react-icons/ri"
import {useNavigate} from "react-router-dom"
import {logOut} from "../../Actions/User"
import { useDispatch,useSelector } from "react-redux";

const MainProfile = () => {
  const {user}=useSelector((state)=> state.user)
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const myOrderHandler=()=>{
    navigate("/myorderprofile")
  }

  const logOutHandler=()=>{
    dispatch(logOut())
    navigate("/")
  }

  const onUpdateHandler=()=>{
    navigate("/updatepassword")
  }

  

  return (
    <div className="contentDiv">
        <div className="contentPhoto">
          <div style={{ margin: "0 30%" }}>
            <div className="photoDiv">
            <img className="photoImageDiv" src={testimg} alt=""></img>
            </div>
          </div>

          <h5 className="poppins" style={{ textAlign: "center" }}>
            {user.name}
          </h5>
          <p
            className="poppins"
            style={{ fontSize: "0.7rem", textAlign: "center" }}
          >
            joined on: {user.createdAt}
          </p>
        </div>
        <div className="contentDetails">
          <div className="myordersDiv">
            <BsFolderPlus
              style={{ fontSize: "1.2rem", marginTop: "4px", color: "#A5A5A5" }}
            />
            <div className="myOrderDivHover" onClick={myOrderHandler}>My orders</div>

          </div>
          <div className="myordersDiv">
            <BsWallet2
              style={{ fontSize: "1.2rem", marginTop: "4px", color: "#A5A5A5" }}
            />
            <div className="myOrderDivHover" >Payments</div>

          </div>

          <div className="mystuffDiv">
            <RiFolderUserFill
              style={{ fontSize: "1.2rem", marginTop: "4px", color: "#A5A5A5" }}
            />
            <div className="myOrderDivHover" >My stuff</div>

          </div>
          <div className="mystuffDiv">
            <RiLockPasswordLine
              style={{ fontSize: "1.2rem", marginTop: "4px", color: "#A5A5A5" }}
            />
            <div className="myOrderDivHover" onClick={onUpdateHandler}>Change password</div>

          </div>
          <div className="mystuffDiv">
            <BsPower
              style={{ fontSize: "1.2rem", marginTop: "4px", color: "red" }}
            />
            <div className="myOrderDivHover" onClick={logOutHandler} >Logout</div>

          </div>
        </div>
      </div>
  )
}

export default MainProfile