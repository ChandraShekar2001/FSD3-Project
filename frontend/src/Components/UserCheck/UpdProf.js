import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile,forgotPassword,resetPassword, updatePassword } from "../../Actions/User";
const UpdProf = () => {
  const dispatch = useDispatch();
  const { loading, users ,user} = useSelector((state) => state.user);
//    useEffect(() => {
//     //  dispatch(getAllUser());
//      dispatch(loadUser());
//    }, [dispatch]); 

  const updateProfileHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile("Dinesh", "dineshnookada908@gmail.com"));
  };

  const updatePasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(updatePassword("chandu@123","dinesh@123","dinesh@123"))
  }
  const forgotPasswordHandler=(e)=>{
    e.preventDefault()
    dispatch(forgotPassword('dineshnookada908@gmail.com'))
  }
  const resetPasswordHandler=(e)=>{
    e.preventDefault()
    dispatch(resetPassword("8348bcbedc79a0b2f2ebf9eea165f9eed9ff4a88",
        {
            password:"chandu@123",
            confirmPassword:"chandu@123"
        }
    ))
  }

  return (
    <>{user&&
        <>
        {/* <h1>{user._id}</h1> */}
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.role}</h1> 
        <h1>{user.resetPasswordToken}</h1></>}

      
      <button type="button" onClick={updateProfileHandler}>update name and email</button>
      <button type="button" onClick={updatePasswordHandler}>update password</button>
      <button type="button" onClick={forgotPasswordHandler}>forgot password</button>
      <button type="button" onClick={resetPasswordHandler}>Reset password</button>
      <br></br>
    </>
  );
};

export default UpdProf;
