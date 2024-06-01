import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  const [TutorLogin, setTutorLogin] = useState({
    email: '',
    password: '',  // Fix the state key name to match backend expectations
  });

  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const onTutorDataChange = (e) => {
    const { name, value } = e.target;
    setTutorLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SubmitTeacherLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/TeacherSignin', TutorLogin);
      if (response.data) {
        setLoginStatus('Login successful!');
        navigate('/TutorDashBoard');
      } else {
        setLoginStatus('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
      setLoginStatus('An error occurred during login');
    }
  };

  return (
    <div className='w-full'>
      <h1 className="text-2xl font-bold mb-4">Signin Now</h1>
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
      <form onSubmit={SubmitTeacherLogin}>
        <input
          type="email"
          placeholder="Teacher Email"
          name="email"
          value={TutorLogin.email}
          onChange={onTutorDataChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"  // Fix the name attribute to match state
          value={TutorLogin.password}
          onChange={onTutorDataChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider transform transition-transform duration-75 active:scale-95">
          Sign in
        </button>
      </form>
      {loginStatus && <p className="mt-3 text-red-500">{loginStatus}</p>}
    </div>
  );
}

export default TeacherLogin;
