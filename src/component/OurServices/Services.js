import React, { useState } from 'react'
import "./services.css"
import { Link } from 'react-router-dom'
import StudentReactModel from '../New Contents/StudentReactRounting/StudentReactModel/StudentReactModel';

function Services() {
  const [Studentreactmodel, setStudentreactmodel] = useState(false);
  const handleStudentreactmodel = () => {

    setStudentreactmodel(!Studentreactmodel)
    // setStudentreactmodel(true)
  }

  return (
    <div>

        <div className="content pb-12" >
      <div className="title my-20">
        <p>Whats makes us Different</p>
        <p>Learning should be engaging and enjoyable. Our tutors incorporate interactive and innovative teaching methods to make the learning process exciting and memorable. We believe that fostering a love for learning is key to long-term academic success.</p>
      </div>
      <div className="items">
        <div className="oddRow">
          <img src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          <div className="oddRowDetails ">
            <h3>greate Teachers</h3>
            <h6>any season, anytime</h6>
            <p>We keep our kitchen clean and sanitized to make sure that all we deliver is amazing healthy and appetizing food. We provide you with a variety of meal options to choose from. Chinese, Italian, Oriental etc. You’ll find all possible vegetarian and non – vegetarian cuisines you can think of.</p>
          </div>
        </div>
        <div className="evenRow">
          <img src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          <div className="evenRowdetails">
            <h3>home Tutions</h3>
            <h6>In the heart of patna</h6>
            <p>A right mix of taste where you can enjoy meals with your near and dear ones. Our dining services, one of the finest in the city are our special attraction. Here you will find the right mix of ambiance, comfort and great food.</p>
          </div>
        </div>

        <div className="flex ">
          <Link className="btn2 mx-auto"
          onClick={handleStudentreactmodel}
          >Register</Link>
          {Studentreactmodel && <StudentReactModel Studentreactmodel={Studentreactmodel} handleStudentreactmodel={handleStudentreactmodel} />}

        </div>
        </div>
      </div>

      
    </div>
  )
}

export default Services
