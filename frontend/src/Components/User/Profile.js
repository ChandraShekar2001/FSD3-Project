import React, { useState } from "react";
import "./Profile.css";
import MainProfile from "./MainProfile";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../Actions/User";
import Afooter from "../Home/Afooter";
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [edit1, setEdit1] = useState("Edit");
  const [isDisabled1, setIsDisabled1] = useState(true);
  const [showButton1, setShowButton1] = useState("noShowButton");
  const [edit2, setEdit2] = useState("Edit");
  const [isDisabled2, setIsDisabled2] = useState(true);
  const [showButton2, setShowButton2] = useState("noShowButton");
  const [edit3, setEdit3] = useState("Edit");
  const [isDisabled3, setIsDisabled3] = useState(true);
  const [showButton3, setShowButton3] = useState("noShowButton");

  const editPerInfoHandler = (e) => {
    e.preventDefault();
    if (edit1 === "Edit") {
      setEdit1("Cancel");
      setIsDisabled1(false);
      setShowButton1("showButton");
    }
    if (edit1 === "Cancel") {
      setEdit1("Edit");
      setIsDisabled1(true);
      setShowButton1("noShowButton");
    }
  };
  const editEmailHandler = (e) => {
    e.preventDefault();
    if (edit2 === "Edit") {
      setEdit2("Cancel");
      setIsDisabled2(false);
      setShowButton2("showButton");
    }
    if (edit2 === "Cancel") {
      setEdit2("Edit");
      setIsDisabled2(true);
      setShowButton2("noShowButton");
    }
  };
  const editPhoneHandler = (e) => {
    e.preventDefault();
    if (edit3 === "Edit") {
      setEdit3("Cancel");
      setIsDisabled3(false);
      setShowButton3("showButton");
    }
    if (edit3 === "Cancel") {
      setEdit3("Edit");
      setIsDisabled3(true);
      setShowButton3("noShowButton");
    }
  };

  const [details, setDetails] = useState({
    name: user.name,
    email: user.email,
  });
  const dispatch = useDispatch();

  // console.log(user);

  const onChangeNameEmailHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);

      setDetails({
        ...details,
        [name]: value,
      });
    
  };

  const onSubmitSaveHandler=()=>{
    dispatch(updateUserProfile(details.name,details.email))
    window.alert("information updated successfully")
    setEdit1("Edit");
    setIsDisabled1(true);
    setShowButton1("noShowButton");
  } 



  return (
    <div>
    <div className="profileMainDiv">
      <MainProfile />
      <div className="contentDisplay" style={{ backgroundColor: "#fff" }}>
        <div className="perInfoDiv" style={{ marginLeft: "3%" }}>
          <span
            style={{
              fontSize: "1.1rem",
            }}
          >
            Personal information
          </span>
          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: "8%" }}
            onClick={editPerInfoHandler}
          >
            {edit1}
          </span>
          <br></br>
          <div className="nameDiv">
            <input
              className="inputNameDiv"
              // placeholder={user.name}
              value={details.name}
              type="text"
              disabled={isDisabled1}
              name="name"
              onChange={onChangeNameEmailHandler}
            ></input>
          </div>

          <br></br>
          <span style={{ fontSize: "1rem" }}>Date of birth</span>
          <br></br>
          <div className="nameDiv">
            <input
              className="inputNameDiv"
              placeholder="08/08/2002"
              disabled
            ></input>
          </div>
          <br></br>
          <span style={{ fontSize: "1rem" }}>Your gender</span>
          <br></br>
          <div className="nameDiv">
            <input type="radio" name="person" disabled checked={true}></input>
            <span>Male</span>
            <input
              style={{ marginLeft: "3%" }}
              type="radio"
              name="person"
              disabled
            ></input>
            <span>Female</span>
          </div>
          {/* <div className={showButton1} >
          <button className="perButtonDiv"  >save</button>
    </div> */}
        </div>
        <div
          style={{
            backgrounColor: "2px solid green",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
            }}
          >
            Email address
          </span>
          {/* <span style={{ color: "blue", cursor: "pointer",marginLeft:"15%"   }} onClick={editEmailHandler}>{edit2}</span> */}
          <br></br>
          <div className="nameDiv">
            <input
              className="inputNameDiv"
              type="email"
              // placeholder={user.email}
              value={details.email}
              disabled={isDisabled1}
              name="email"
              onChange={onChangeNameEmailHandler}
            ></input>
          </div>
          {/* <div className={showButton2} >
          <button className="perButtonDiv perButtonDivPhone"  >save</button>
    </div> */}
        </div>
        <div
          style={{
            backgrounColor: "2px solid green",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
            }}
          >
            Phone number
          </span>
          {/* <span style={{ color: "blue", cursor: "pointer",marginLeft:"14%"  }} onClick={editPhoneHandler}>{edit3}</span> */}
          <br></br>
          <div className="nameDiv">
            <input
              className="inputNameDiv"
              type="number"
              placeholder="9848356709"
              disabled={isDisabled1}
            ></input>
          </div>
          <div className={showButton1}>
            <button className="perButtonDiv perButtonDivPhone" type="submit" onClick={onSubmitSaveHandler}>save</button>
          </div>
        </div>
        
        
      </div>
      
    </div>
    {/* <Afooter/> */}
    </div>
  );
};

export default Profile;
