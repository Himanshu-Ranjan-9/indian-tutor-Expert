import React, { useEffect, useState } from 'react';
import "./Banner.css";
import schoolboy from "../../../assets/NewContent/5rk4_6fl4_220311.jpg";
import ScrollReveal from 'scrollreveal';
import ReactModel from '../ReactModel/TeacherReactModel';
import StudentReactModel from '../StudentReactRounting/StudentReactModel/StudentReactModel';
function Banner() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content button", {
      ...scrollRevealOption,
      delay: 1500,
    });
  }, []);
// const [isOpen , setIsOpen] = useState(false)
// const handleClosebtn=(e)=>{
//   e.preventDefault();

//   setIsOpen(!isOpen);


// }
const [Studentreactmodel, setStudentreactmodel] = useState(false);
const handleStudentreactmodel = () => {

  setStudentreactmodel(!Studentreactmodel)
  // setStudentreactmodel(true)
}


  return (
    <div className='w-full h-[90vh] items-center justify-normal bg-white'>
      <div className="header__container">
        <div className="header__content lg:py-40">
          <h1>Unlock Your <span>Academic Potential</span> with Our Premier Tuition Services</h1>
          <p>
            Welcome to <span className=' text-blue-400   font-[4rem] 
' >IndianTutorExpert</span>, where learning knows no bounds! As a student in India, you're on a quest for knowledge and excellence, and we're here to guide you every step of the way. Say goodbye to academic struggles and hello to success with our personalized tuition services tailored to meet your unique learning needs.
          </p>
          <button type="submit" onClick={handleStudentreactmodel} >Register Now</button>
          {Studentreactmodel && <StudentReactModel Studentreactmodel={Studentreactmodel} handleStudentreactmodel={handleStudentreactmodel} />}
        </div>
        <div className="header__image ">
          <img src={schoolboy} alt="header" className='max-w-[734px]' id='Banner-img' />
        </div>

      </div>
    </div>
  )
}

export default Banner;
