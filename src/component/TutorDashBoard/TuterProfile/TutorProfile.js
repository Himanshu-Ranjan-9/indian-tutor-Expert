import React, { useEffect, useState } from 'react';
import './TutorProfile.css';
import X from '../../../assets/icons/icons8-x-64-black.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TutorProfile() {
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/TeacherProfile');
        setTeacherData(response.data[0]); // Assuming only first data
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, []);

  return (
    <div>
      <div className="outer-container">
        <div className="Lead-container flex flex-col">
          <div className="font-bold text-black bg-blue-500 flex w-full items-center">
            <div className="Name-container ml-auto">
              <h1 className="justify-center">
                {teacherData ? teacherData.name : 'Teacher Name'}
              </h1>
            </div>
            <div className="ml-auto">
              <Link to="/TutorDashBoard">
                <img src={X} alt="" className="h-10 w-10 z-50 mr-4" />
              </Link>
            </div>
          </div>
          <hr />
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Full Name:</th>
                  <td>{teacherData ? teacherData.name : 'Loading...'}</td>
                </tr>
                <tr>
                  <th>Mobile No.</th>
                  <td>{teacherData ? teacherData.contact : 'Loading...'}</td>
                </tr>
                <tr>
                  <th>Gender:</th>
                  <td>{teacherData ? teacherData.gender : 'Loading...'}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{teacherData ? teacherData.email : 'Loading...'}</td>
                </tr>
                <tr>
                  <th>Highest Qualification:</th>
                  <td>{teacherData ? teacherData.qualification : 'Loading...'}</td>
                </tr>
                <tr>
                  <th>Total Experience:</th>
                  <td>{teacherData ? teacherData.experience : 'Loading...'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorProfile;
