import React, { useState,useEffect } from "react";
import "./ResetPassword.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { updatePassword } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UpdatePassword = () => {
    const {isUpdated,error}=useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChangeUpdateHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const onClickUpdateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePassword(
        password.oldPassword,
        password.newPassword,
        password.confirmNewPassword
      )
    );
  };

 useEffect(() => {
    if(isUpdated===true){
        navigate('/profile')
        window.alert("Password changed successfully")
    }
    if(error){
        window.alert(error)
    }
    dispatch({
        type:"updatePasswordReset"
    })
  }, [isUpdated,dispatch,error,navigate])
  

  

  return (
    <div className="resetMainDiv">
      <form>
        <div className="resetName">Reset Password</div>
        <div>
          <input
            className="oldPassDiv"
            placeholder="Old Password"
            name="oldPassword"
            onChange={onChangeUpdateHandler}
          ></input>
        </div>
        <div>
          <input
            className="newPassDiv"
            placeholder="New Password"
            name="newPassword"
            onChange={onChangeUpdateHandler}
          ></input>
        </div>
        <div>
          <input
            className="cnewPassDiv"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            onChange={onChangeUpdateHandler}
          ></input>
        </div>
        <button className="resetButton" onClick={onClickUpdateHandler}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
