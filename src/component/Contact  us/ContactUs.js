// import React, { useState } from 'react';
import bg from "../../assets/contact.jpg";
import MassageForm from "./forms/MassageForm";

function ContactUs() {

  return (
    <div 
      className="contactUsBg flex justify-center items-center w-full h-screen bg-cover bg-center bg-fixed py-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <MassageForm/>
      </div>
  );
}

export default ContactUs;
