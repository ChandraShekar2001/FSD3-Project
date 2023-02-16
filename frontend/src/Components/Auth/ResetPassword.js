import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import { resetPassword } from "../../Actions/User";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch,useSelector } from "react-redux";
const ResetPassword = () => {
    const {success}=useSelector((state)=>state.user)
  const params = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [pass, setPass] = useState({
    password: "",
    confirmpassword: "",
  });
  console.log(success);
//   console.log(params.token, typeof params.token);
  const onChangeResethandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setPass({
        ...pass,
        [name]:value,
    })
  };

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    dispatch(resetPassword(params.token,{
        password:pass.password,
        confirmPassword:pass.confirmpassword,
    }))

  }

  const onLoginHandler = () => {
    navigate("/");
  };

  if(success===true){
    window.alert("reset password successful")  
  }




  return (
    <div className="resetMainDiv">
      <form>
        <div className="resetName">Reset Password</div>
        <div>
          <input
            className="newPassDiv"
            placeholder="New Password"
            name="password"
            value={pass.password}
            onChange={onChangeResethandler}
            type="password"
          ></input>
        </div>
        <div>
          <input
            className="cnewPassDiv"
            placeholder="Confirm New Password"
            name="confirmpassword"
            value={pass.confirmpassword}
            onChange={onChangeResethandler}
            type="password"
          ></input>
        </div>
        <button className="resetButton" onClick={onSubmitHandler}>Reset Password</button>
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
      </form>
    </div>
  );
};

export default ResetPassword;
