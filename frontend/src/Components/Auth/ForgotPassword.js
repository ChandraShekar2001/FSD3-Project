import React from "react";
import "./ForgotPassword.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const onLoginHandler = () => {
    navigate("/");
  };

  return (
    <div className="forgotMainDiv">
      <form>
        <div className="forgotName">Forgot Password</div>
        <div className="inputField">
          <span>
            <BsPersonFill />
          </span>
          <input placeholder="Username/Email"></input>
        </div>
        <button className="forgotButton">Reset Password</button>
      </form>
      <div className="goLoginDiv">
        <BsArrowLeftShort style={{ marginTop: "8.5%" }} />
        <p
          onClick={onLoginHandler}
          style={{
            marginTop: "8%",
            fontSize: "78%",
          }}
        >
          Go to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
