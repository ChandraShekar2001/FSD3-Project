import React from "react";
import "./Afooter.css";
import GTruck from "../../../src/images/green truck.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Afooter = () => {
  return (
    <div className="footerMainDiv">
      <div className="followusDiv">
        <div className="nSymbolFooter">
          {/* <img className="nSymbolImageFooter" src={GTruck} alt="imagesd" /> */}
          <h3 className="footerName">Ecommerce</h3>
        </div>
        <h6 style={{ fontSize: "14px", fontWeight: "100",marginTop: "10px" }}>
          Our community is supporting brands & businesses through innovative,
          omnichannel solutions.
        </h6>
        <h5 style={{marginTop:"15px",fontSize:"20px"}}>Follow us on</h5>
        <>
          <BsFacebook style={{ fontSize: "20px", marginRight: "14px" }} />
          <BsInstagram style={{ fontSize: "20px", marginRight: "14px" }} />
          <BsTwitter style={{ fontSize: "20px", marginRight: "14px" }} />
          <BsGithub style={{ fontSize: "20px", marginRight: "14px" }} />
        </>
        <input style={{marginTop:"15px"}} placeholder="Your email"></input>
        <button style={{height:"28px",backgroundColor:"#008000",color:"white",border:"none"}}>submit</button>
      </div>
      <div className="servicesDiv">
        <h3 className="companyNameDiv">Products</h3>
        <h6 style={{ marginTop: "25px" }}>Laptops</h6>
        <h6>Mobiles</h6>
        <h6>Smart watches</h6>
        <h6>Accesories</h6>
      </div>
      <div className="companyDiv">
        <h3 className="companyNameDiv">company</h3>
        <h6 style={{ marginTop: "25px" }}>Meet the team</h6>
        <h6>Blog</h6>
        <h6>Partnerships</h6>
        <h6>Carrers</h6>
        <h6>Press </h6>
      </div>
      <div className="helpfulDiv">
        <h3 className="companyNameDiv">Helpful links</h3>
        <h6 style={{ marginTop: "25px" }}>Your account</h6>
        <h6>Live Chat</h6>
        <h6>Shipping rates</h6>
        <h6>Help</h6>
      </div>
      <div className="legalDiv">
        <h3 className="companyNameDiv">Legal</h3>
        <h6 style={{ marginTop: "25px" }}>Terms & Conditions</h6>
        <h6>Privacy</h6>
        <h6>Legal policies</h6>
        <h6></h6>
      </div>
    </div>
  );
};

export default Afooter;
