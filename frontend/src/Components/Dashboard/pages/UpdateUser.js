import React, { useState, useEffect } from "react";
import "../components/styles/dashBoardForms.css";
import {
  BsPersonFill,
  BsFillEnvelopeFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { updateUser } from "../../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./UsersList";
const UpdateUser = (props) => {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.user);

  const [details, setdetails] = useState({
    name: props.name,
    email: props.email,
    role: props.role,
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setdetails({
      ...details,
      [name]: value,
    });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(props.id, details));
  };

  useEffect(() => {
    if (success) {
      window.alert("user update success");
    }
    if (error) {
      window.alert(error);
    }
    dispatch({ type: "updateUserReset" });
  }, [dispatch, success, error]);

  return (
    <>
      <div className="formContainer">
        <div className="form-box">
          <h1>EDIT USER</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <span>
                  <BsPersonFill />
                </span>
                <input
                  type="text"
                  placeholder="user name"
                  name="name"
                  value={details.name}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="input-field">
                <span>
                  <BsFillEnvelopeFill />
                </span>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={details.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="input-field selectOptionDiv">
                <span>
                  <BsFillPersonCheckFill />
                </span>

                <select
                  className="selectOption"
                  name="role"
                  value={details.role}
                  onChange={onChangeHandler}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="btn-field">
              <button type="button" onClick={onClickHandler}>
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
