import React from 'react'
import "./LeadsCard.css"

function LeadsCard() {
  return (
    <div >
    <div className=".outer-container">


      <div class="Lead-container flex flex-col">
      <div className='font-bold text-black'>


  <h2>A Mathematics Tutor Required For Class - 9th</h2>
     posted on :  28-december-2024 
     <hr />
    </div>
<div className="table-container">
  <table>
    <tr>
      <th>Class:</th>
      <td>9th</td>
    </tr>
    <tr>
      <th>Segment:</th>
      <td>Class IX - X</td>
    </tr>
    <tr>
      <th>Approx Fees:</th>
      <td>Rs.5400 - 6000</td>
    </tr>
    <tr>
      <th>Area:</th>
      <td>Malviya Nagar, New Delhi, Delhi, India</td>
    </tr>
    <tr>
      <th>Subject:</th>
      <td>Mathematics</td>
    </tr>
    <tr>
      <th>No. of Sessions:</th>
      <td>20 Sessions in Month</td>
    </tr>
    <tr>
      <th>Teaching At:</th>
      <td>Student Home</td>
    </tr>
    <tr>
      <th>Posted By:</th>
      <td>Vandana</td>
    </tr>
  </table>
  </div>
      <div colspan="2" class="views"><i class="fas fa-eye"></i>Views: 1</div>
  <div class="button-container">
    <a href="#" class="button button-contact">VIEW CONTACT</a>
    <a href="#" class="button">OPEN</a>
  </div>
</div>
      
    </div>
    </div>
  )
}

export default LeadsCard
