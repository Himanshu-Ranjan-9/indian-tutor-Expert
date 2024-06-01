import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import menu from "../../assets/icons/icons8-hamburger-50.png"
import close from "../../assets/icons/icons8-x-64-black.png"
import logo from "../../assets/logo.jpeg"
import ReactModel from "../New Contents/ReactModel/TeacherReactModel";
import StudentReactModel from "../New Contents/StudentReactRounting/StudentReactModel/StudentReactModel";
// import StudentReactModel from "../New Contents/StudentReactRounting/StudentReactModel/StudentReactModel";


const navigation = [
  { name: 'Home', to: '/', current: false },
  { name: 'Services', to: '#services', current: false },
  // { name: 'Reviews', to: '/', current: false },
  { name: 'Subjects', to: '#subjects', current: false },
  { name: 'About', to: '#Footer', current: false },
  { name: 'Contect Us', to: '#Footer', current: false },
]
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [TeacherReactModel, setTeacherReactModel] = useState(false);
  const handleTeacherReactModel = () => {
    setTeacherReactModel(!TeacherReactModel)
    // setTeacherReactModel(true)
  }
  const [Studentreactmodel, setStudentreactmodel] = useState(false);
  const handleStudentreactmodel = () => {

    setStudentreactmodel(!Studentreactmodel)
    // setStudentreactmodel(true)
  }



  return (
    <>
      <nav className="Main-navbar">
        <div className="Main-nav-container">
          <NavLink exact to="/" className="Main-nav-logo">
            <Link to="/"  className='flex w-full items-center'>
             <img src={logo} alt="logo" className='logo max-w-14 max-h-14 rounded-full ' />
             <h2 className='text-black font-cursive text-xl flex items-center justify-center'>
             Indian Tutor Expert
            </h2>
           </Link>
          </NavLink>

          <ul className={click ? "Main-nav-menu active" : "Main-nav-menu"}>
          {navigation.map((items, index)=>(
          <div key={index}>
            <li className="Main-nav-item">
              <a
                exact
                href={items.to}
                activeClassName="active"
                className="Main-nav-links text-xl text-black"
                onClick={handleClick}
                
              >
                {items.name}
              </a>
            </li>
            </div>
            ))}
            <li className="student-btn my-auto mx-2">
              <Link to="" className=" text-white  bg-orange-600 px-3 py-1 text-xl font-poppins rounded-3xl "
             onClick={handleStudentreactmodel}>student </Link>

             {Studentreactmodel && <StudentReactModel Studentreactmodel={Studentreactmodel} handleStudentreactmodel={handleStudentreactmodel} />}

            </li>
            <li className="Tuter-btn my-auto mx-2">
            <Link to="" className=" text-white justify-center items-center bg-orange-600 px-3 py-1 text-xl font-poppins rounded-3xl "
               onClick={handleTeacherReactModel}>tutor</Link>
             {TeacherReactModel && <ReactModel TeacherReactModel={TeacherReactModel} handleTeacherReactModel={handleTeacherReactModel} />}
            </li>
            <li className="Pay-btn lg:my-auto mx-2 ">
              <Link to="/Payment" className=" text-white justify-center items-center bg-orange-600 px-3 py-1 text-xl font-poppins rounded-3xl ">
                Pay
              </Link>
            </li>
           
          </ul>
          <div className="Main-nav-icon hidden" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <img src={close} alt="" className=""/>
              </span>
            ) : (
              <span className="icon">
                <img src={menu} alt="" />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;