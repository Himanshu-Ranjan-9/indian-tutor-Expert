import React from 'react'
import "./TuterProfile.css"

function TuterProfile() {
  return (
    <div >
    <div className=".outer-container">


      <div class="Lead-container flex flex-col">
      <div className='font-bold text-black'>


  <h2> User Name</h2>
     <hr />
    </div>
<div className="table-container">
  <table>
    <tr>
      <th>Full Name:</th>
      <td>User name</td>
    </tr>
    <tr>
      <th>Mobile No.</th>
      <td>1234567890</td>
    </tr>
    <tr>
      <th>gender</th>
      <td>Male</td>
    </tr>
    <tr>
      <th>Email:</th>
      <td>abc@gmail.com</td>
    </tr>
    <tr>
      <th>Registration Date</th>
      <td>02-dec-2024</td>
    </tr>
    <tr>
      <th>Total Experience</th>
      <td>6 yrs.</td>
    </tr>
  </table>
  </div>
</div>
      
    </div>
    </div>
  )
}

export default TuterProfile
