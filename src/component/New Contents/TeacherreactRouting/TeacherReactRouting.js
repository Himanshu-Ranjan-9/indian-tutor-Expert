import React from 'react';
import './TeacherReactRouting.css'; // Include the custom CSS for specific styles
import closeButton from '../../../assets/NewContent/icons8-x-94.png';
import TeacherLogin from './TeacherLogin/TeacherLogin';
import TeacherSignup from './TeacherSignup/TeacherSignup';

const TeacherReactRouting = ({ handleTeacherReactModel }) => {
  // const [studentData, setStudentData] = useState({
  //   email: '',
  //   password: '',
  // });

  // const onTutorDataChange = (e) => {
  //   const { name, value } = e.target;
  //   setStudentData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const [teacherData, setTeacherData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  // const onTeacherDataChange = (e) => {
  //   const { name, value } = e.target;
  //   setTeacherData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSignUpClick = () => {
    document.getElementById('container').classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    document.getElementById('container').classList.remove('right-panel-active');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div
        className="container relative w-full max-w-2xl min-h-480 bg-white rounded-lg shadow-lg overflow-hidden"
        id="container"
      >
        <div className="form-container sign-up-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out">
          <form className="forms bg-white flex flex-col items-center justify-center h-full p-8 text-center">
            {/* <h1 className="text-2xl font-bold mb-4">Enquiry Now</h1>
            <div className="social-container flex justify-center mb-4">
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=D5jqabDUzubh&format=png&color=000000" alt="Facebook" />
              </a>
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=X7Ps4LtblU6u&format=png&color=000000" alt="Google" />
              </a>
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=yWDrzc0ldyqH&format=png&color=000000" alt="LinkedIn" />
              </a>
            </div>
            <input
              type="text"
              placeholder="Student Full Name"
              name="name"
              value={studentData.name}
              onChange={onStudentDataChange}
              className="mb-3 p-2 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Student Email"
              name="email"
              value={studentData.email}
              onChange={onStudentDataChange}
              className="mb-3 p-2 border rounded w-full"
            />
            <input
              type="tel"
              id="phone no."
              placeholder="Phone"
              name="Student phone"
              value={studentData.phone}
              onChange={onStudentDataChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="mb-3 p-2 border rounded w-full"
            />
            <button className="bg-red-500 text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider transform transition-transform duration-75 active:scale-95">
              Register Now
            </button> */}
            {/* <Abdc/> */}
            <TeacherSignup/>
          </form>
          <div>
          </div>
        </div>
        <div className="form-container sign-in-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out z-20">
          <form className="forms bg-white flex flex-col items-center justify-center h-full p-8 text-center">
            {/* <h1 className="text-2xl font-bold mb-4">Enquiry Now</h1>
            <div className="social-container flex justify-center mb-4">
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=3SulZF7k63GU&format=png&color=000000" alt="Facebook" />
              </a>
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=1S1netqOMZ4h&format=png&color=000000" alt="Google" />
              </a>
              <a href="#" className="social mx-2">
                <img src="https://img.icons8.com/?size=100&id=XwL1uwivrCEF&format=png&color=000000" alt="LinkedIn" />
              </a>
            </div>
            <input
              type="text"
              placeholder="Teacher Full Name"
              name="name"
              value={teacherData.name}
              onChange={onTeacherDataChange}
              className="mb-3 p-2 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Teacher Email"
              name="email"
              value={teacherData.email}
              onChange={onTeacherDataChange}
              className="mb-3 p-2 border rounded w-full"
            />
            <input
              type="tel"
              id="phone"
              placeholder="Teacher Phone no."
              name="phone"
              value={teacherData.phone}
              onChange={onTeacherDataChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="mb-3 p-2 border rounded w-full"
            />
            <button className="bg-red-400 text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider transform transition-transform duration-75 active:scale-95" id='Signup-btn'>
              Register Now
            </button> */}
          <TeacherLogin/>
          </form>
        </div>
        <div className="overlay-container absolute top-0 left-1/2 h-full w-1/2 overflow-hidden transition-transform duration-600 ease-in-out z-40">
          <div className="overlay bg-gradient-to-r from-red-500 to-red-600 bg-cover bg-center h-full w-[200%] relative -left-full transition-transform duration-600 ease-in-out">
            <div className="overlay-panel overlay-left flex flex-col items-center justify-center p-10 text-center w-1/2 h-full transform translate-x-[-20%] transition-transform duration-600 ease-in-out">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="mt-2">Click here to Sign in</p>
              <button
                className="ghost bg-transparent border-2 border-white text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider mt-4 transform transition-transform duration-75 active:scale-95"
                id="signIn"
                onClick={handleSignInClick}
              >
                Log in 
              </button>
            </div>
            <div className="overlay-panel overlay-right flex flex-col items-center justify-center p-10 text-center w-1/2 h-full transform translate-x-0 transition-transform duration-600 ease-in-out">
              <h1 className="text-2xl font-bold">Hello!</h1>
              <p className="mt-2">Enter your personal details and start the journey with us</p>
              <button
                className="ghost bg-transparent border-2 border-white text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider mt-4 transform transition-transform duration-75 active:scale-95"
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="routerClose absolute right-[422px] top-44 z-50 border-none outline-none">
        <img
          src={closeButton}
          alt="Close"
          className="w-12 bg-transparent h-12 border-none outline-none"
          onClick={handleTeacherReactModel}
        />
      </div>
    </div>
  );
};

export default TeacherReactRouting;
