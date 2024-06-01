import { iconsImgs } from "../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg"

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top p-4">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <div className="logo-box flex text-white">
            <Link to="/"  className='flex w-full items-center'>
             <img src={logo} alt="logo" className='logo max-w-14 max-h-14 rounded-full ' />
             <h1 className='text-white font-cursive text-xl flex items-center justify-center'>
             Indian Tutor Expert
            </h1>
           </Link>

            </div>
        </div>
        <div className="content-top-btns flex">
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
            <Link to="/" className="Home-btn" >
                <img src={ iconsImgs.home } alt="" className=" h-7 mx-5" />
            </Link>
        </div>
    </div>
  )
}

export default ContentTop
