import React, { useState,useEffect } from 'react'
import "./StudentProfile.css"
import X from "../../../assets/icons/icons8-x-64-black.png"
import { Link } from 'react-router-dom'
import axios from 'axios';

function StudentProfile() {
  const [StudentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/StudentProfile');
        setStudentData(response.data[0]); // Assuming only first data
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchStudentData();
  }, []);
  return (
    <div >
    <div className="outer-container">


      <div class="Lead-container flex flex-col">
      <div className='font-bold text-black bg-blue-500 flex w-full  items-center  '>

    <div className='Name-container ml-auto'>
  <h1 className='justify-center '>
  {StudentData ? StudentData.name : 'Student Name'}
   </h1>

    </div>
    <div className=' ml-auto'>
<Link to="/StudentDashBoard">

  <img src={X} alt="" className='h-10 w-10 z-50 mr-4'/>
</Link>
    </div>
     <hr />
    </div>
<div className="table-container">
  <table>
    <tr>
      <th>Full Name:</th>
      <td>{StudentData ? StudentData.name : 'Loading...'}</td>
    </tr>
    <tr>
      <th>Subject:</th>
      <td>{StudentData? StudentData.SUBJECT : 'Loading...'}</td>
    </tr>
    <tr>
      <th>Approx Fee:</th>
      <td>{StudentData? StudentData.FEE : 'Loading...'}</td>
    </tr>
    <tr>
      <th>Board:</th>
      <td>{StudentData? StudentData.Board : 'Loading...'}</td>
    </tr>
    <tr>
      <th>Mobile No.</th>
      <td>{StudentData? StudentData.Contact : 'Loading...'}</td>
    </tr>
    <tr>
      <th>Email:</th>
      <td>{StudentData? StudentData.email : 'Loading...'}</td>
    </tr>
  </table>
  </div>
</div>
      
    </div>
    </div>
  )
}

export default StudentProfile
