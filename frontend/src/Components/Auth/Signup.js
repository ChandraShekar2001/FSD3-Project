import React, { useState, useEffect } from "react";
import { registerUser } from "../../Actions/User";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {  FaUserAlt} from 'react-icons/fa';
import {  BsFillKeyFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import "./Signup.css";
const Signup = () => {
  const { error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = user;
    dispatch(registerUser({ name, email, password, confirmpassword }));
    /*setUser({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })*/
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirmpassword);
  };
  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    if (success) {
      navigate("/");
    }
    dispatch({ type: "signUpClearErrors" });
  }, [error, success, navigate, dispatch]);

  return (
    <div className="signupMainDiv">
    <form method="POST">
      <div className="signupName">Sign Up</div>
      <div className="googleName">
        <FcGoogle style={{ fontSize: "35px" }}></FcGoogle>
        <div
          style={{ paddingLeft: "8%", fontSize: "80%", fontWeight: "500" }}
        >
          Signup with Google
        </div>
      </div>
      <div className="facebookName">
        <BsFacebook
          style={{ fontSize: "35px", color: "#3b5998" }}
        ></BsFacebook>
        <div
          style={{ paddingLeft: "8%", fontSize: "80%", fontWeight: "500" }}
        >
          Signup with Facebook
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "3%" }}>
        <div className="orLine"></div>
        <div
          style={{
            color: "rgb(186, 186, 186)",
            paddingLeft: "3%",
            paddingRight: "2%",
          }}
        >
          or
        </div>
        <div className="orLine"></div>
      </div>
      <div className="inputField">
        <span>
          <FaUserAlt style={{fontSize:"90%"}}/>
        </span>
        <input
        name="name"
          // className="emailDiv"
          placeholder="Username"
          type="text"
          value={user.name}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div className="inputField">
        <span>
          <MdEmail/>
        </span>
        <input
        name="email"
          // className="emailDiv"
          placeholder="Email"
          type="email"
          value={user.email}
          onChange={onChangeHandler}
          // style={{ marginTop: "5%" }}
        ></input>
      </div>
      <div className="inputField">
        <span>
          <BsFillKeyFill/>
        </span>
        <input
        name="password"
          // className="passwordDiv"
          placeholder="Password"
          onChange={onChangeHandler}
          // style={{ marginTop: "5%" }}
          type="password"
          value={user.password}
        ></input>
      </div>
      <div className="inputField">
        <span>
        <BsFillKeyFill/>
        </span>
        <input
        name="confirmpassword"
          // className="passwordDiv"
          placeholder="Confirm Password"
          onChange={onChangeHandler}
          // style={{ marginTop: "5%" }}
          type="password"
          value={user.confirmpassword}
        ></input>
      </div>
      <div className="inputField">
        <span>
        <BsFillKeyFill/>
        </span>
        <input
        name="confirmpassword"
          // className="passwordDiv"
          placeholder="Confirm Password"
          // onChange={onChangeHandler}
          // style={{ marginTop: "5%" }}
          type="file"
          // value={user.confirmpassword}
        ></input>
      </div>
      <button
        className="signupButton"
        onClick={onSubmitHandler}
        style={{ marginTop: "5%" }}
      >
        Signup
      </button>
      <div className="signupPolicy">
        By signing up you accept our Privacy Policy, Terms & Licensing
        Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms
        apply.
      </div>
    </form>
  </div>
  );
};

export default Signup;
