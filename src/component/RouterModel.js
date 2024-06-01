import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/banner2.jpg";
import X from "../assets/icons/icons8-x-24.png";
// import "./CSS/signup.css";
// import TutorRegisrouterModel from "./TutorRegister";
import TutorRegister from "./TutorRegister";
// import StudentRegister from "./StudentRegister";
import TutorLogin from "./TutorLogin";
import "./RouterModel.css"

  
function RouterModel({  handlerouterModel}) {
  const [btnStyle, setBtnStyle] = React.useState({});
  const [leftbtn, setLeftbtn] = React.useState({
    color: "black",
    fontWeight: "bold",
    condition: {},
  });
  const [rightbtn, setRightbtn] = useState({
    color: "gray",
    condition: "",
  });
  const leftClick = () => {
    setBtnStyle({ left: "0" });
    setLeftbtn({ color: "black ", fontWeight: "bold", condition: true });
    setRightbtn({ color: "gray", fontWeight: "normal", condition: false });
  };

  const rightClick = () => {
    setBtnStyle({ left: "110px" });
    setLeftbtn({ color: "gray ", fontWeight: "normal", condition: false });
    setRightbtn({ color: "black", fontWeight: "bold", condition: true });
  };

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const navigate = useNavigate();

  const handleCancilClick = () => {
      handlerouterModel()
  };
  const handleSubmit = async (e) => {};
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="DivWrapper fixed  top-0  bottom-0 left-0 right-0  "
        style={{
          backgroundColor: "rgba(0,0, 0, 0.6)",
          filter: "blur(8px)",
          backgroundBlendMode: "brighten",
        }}
      ></div>
      <button className="routerClose absolute right-[142px] top-20 z-40">
        <img
          src={X}
          alt=""
          className="w-12 h-12 z-40"
          onClick={handleCancilClick}
        />
      </button>
      <div className="DivContainer w-[50rem] h-[35rem]  z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div
            className="flex w-[100%] h-full z-30 justify-center rounded-xl "
            style={{
              background: `rgb(0, 0, 0, 0.3) url(${bg})`,
              backgroundBlendMode: "darken",
              backgroundSize: "cover",
              backgroundRepeat: "noRepeat",
              backgroundPosition: "bottom",
            }}
          >
            <div className="form-box absolute top-0">
            <div className="button-box">
              <div id="btn" style={btnStyle}></div>
              <div className="flex justify-center items-center px-5">
                <button
                  type="button"
                  className="toggle-btn h-14 px-5 "
                  onClick={leftClick}
                  style={leftbtn}
                >
                  SignUp
                </button>
                <button
                  type="button"
                  className="toggle-btn h-14 px-6"
                  onClick={rightClick}
                  style={rightbtn}
                >
                  SignIn
                </button>
              </div>
            </div>
          </div>
          {/* <TutorRegister  handleLoginmodel={handleLoginmodel} handleSignUpmodel={handleSignUpmodel}/> */}
          {(rightbtn.condition) ? <TutorLogin leftClick={leftClick}/> : <TutorRegister  rightClick={rightClick}/>}


          
        </div>
      </div>
      {/* </div> */}

      
    </>
  );
}

export default RouterModel;
