import React from 'react'
import "./Ourprevilage.css"
import bg from "../../assets/teacherBG.jpg"

function OurPrevilage() {
  return (
    <div>
        <div class="features overflow-hidden " id='services'>
      <div class="featuresHeading">
      <h1>Our Servises</h1>
      <h6>PROFFESIONAL DUTY</h6>
      <p>We combine importance of your event with quality of our services.<br/>
        Our focus is on the fine details and lavish arrangements, which will stay etched in your memory for a long time.</p>
      </div>
      <div class="bottomStyles">
        <div class="bottomStyle1"></div>
        <div class="bottomStyle2"></div>
        <div class="bottomStyle3"></div>
      </div>
      <div class="tabs ">
        <div class="tab1">
          
            <i class="fa-solid fa-map-location TabIcon"></i>
            <h3>Home Tution</h3>

            <p>we're here to guide you every step of the way. Say goodbye to academic struggles and hello to success with our personalised tuition services tailored to meet your unique learning needs.</p>
        </div>
        <div class="tab2">
          <i class="fa-solid fa-clapperboard TabIcon"></i> 
          <h3>Supportive Community</h3>

            <p>Teaching can sometimes feel like a solitary endeavour, but it doesn't have to be. Join our supportive community of educators where you can collaborate, share ideas, and seek advice from fellow teachers. Together, we can overcome challenges and celebrate successes.</p>
        </div>
        <div class="tab3">
          
          <i class="fa-solid fa-bowl-food TabIcon"></i>
          <h3>Expert Tutoring </h3>

            <p>Whether you're preparing for board exams, tackling a challenging subject, or aiming for academic excellence,Our team of expert tutors is here to support you. With years of experience and a passion for teaching</p>
        </div>
        {/* <div class="tab4">
          
          <i class="fa-solid fa-bowl-food TabIcon"></i>
          <h3>Our Service 1d</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque nihil libero dignissimos, nulla ducimus cumque vel error eveniet modi laboriosam recusandae impedit velit at?</p>
        </div> */}
      </div>
    </div>

      
    </div>
  )
}

export default OurPrevilage
