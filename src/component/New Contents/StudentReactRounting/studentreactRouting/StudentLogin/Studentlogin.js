// import React, { useState } from 'react'

// function Studentlogin() {
//     const [StudentLogin, setStudentLogin] = useState({
//     email: '',
//     Phone: '',
//   });

//   const onStudentDataChange = (e) => {
//     const { name, value } = e.target;
//     setStudentLogin((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const HandleStudentLogin=()=>{


//   }

//   return (
//     <>
//         <div className='w-full'>
//             <h1 className="text-2xl font-bold mb-4">Signin Now</h1>
//             <div className="social-container flex justify-center mb-4">
//               <a href="#" className="social mx-2">
//                 <img src="https://img.icons8.com/?size=100&id=D5jqabDUzubh&format=png&color=000000" alt="Facebook" />
//               </a>
//               <a href="#" className="social mx-2">
//                 <img src="https://img.icons8.com/?size=100&id=X7Ps4LtblU6u&format=png&color=000000" alt="Google" />
//               </a>
//               <a href="#" className="social mx-2">
//                 <img src="https://img.icons8.com/?size=100&id=yWDrzc0ldyqH&format=png&color=000000" alt="LinkedIn" />
//               </a>
//             </div>
            
//             <input
//               type="email"
//               placeholder="Student Email"
//               name="email"
//               value={StudentLogin.email}
//               onChange={onStudentDataChange}
//               className="mb-3 p-2 border rounded w-full"
//             />
//             <input
//               type="text"
//               id="password"
//               placeholder="Password"
//               name="Password"
//               value={StudentLogin.Password}
//               onChange={onStudentDataChange}
//               className="mb-3 p-2 border rounded w-full"
//             />
//             <button onSubmit={HandleStudentLogin} className="bg-red-500 text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider transform transition-transform duration-75 active:scale-95"
//             // onClick={StudenteacherLogin}
//             >
//               Sign in
//             </button>

//         </div>
        
      
//     </>
//   )
// }

// export default Studentlogin

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [studentLogin, setStudentLogin] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onStudentDataChange = (e) => {
    const { name, value } = e.target;
    setStudentLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/StudentSignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentLogin),
      });
      const result = await response.json();
      if (result) {
        alert('Login successful!');
       navigate("/StudentDashBoard");
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='w-full'>
      <h1 className="text-2xl font-bold mb-4">Sign in Now</h1>
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
      <form onSubmit={handleStudentLogin}>
        <input
          type="email"
          placeholder="Student Email"
          name="email"
          value={studentLogin.email}
          onChange={onStudentDataChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={studentLogin.password}
          onChange={onStudentDataChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider transform transition-transform duration-75 active:scale-95"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default StudentLogin;
