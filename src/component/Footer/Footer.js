import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import "./footer.css"

function Footer() {
  const [credentials, setCredentials] = useState({
    name: "",
    type: "Student",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming your backend endpoint is /api/submit
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, reset the form
        setCredentials({ name: "", type: "Student", phone: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div
        id="Footer"
        className="footer-body py-9 text-white px-16 flex gap-4 "
        style={{ backgroundColor: "rgb(36 65 113)" , maxWidth:"100%" }}>
          <div className="indiantutor flex flex-col w-full ">
            <div className="footerTitle flex ">
              <img src={logo} alt="Logo" className="h-12 rounded-full" />
              <h2 className="text-3xl font-cursive underline ">
                Indian Tutor Expert
              </h2>
            </div>
            <p className="font-poppins indiantutor-text">
              Whether you're looking for assistance in mathematics, science,
              languages, or any other subject, we've got you covered. Our
              diverse team of tutors specializes in a wide range of subjects,
              catering to students of all grade levels.
            </p>
            <div className="icons my-4 flex gap-2">
              <a href="https://twitter.com">
                <img
                  src="https://img.icons8.com/?size=100&id=KxHlias9AgZt&format=png&color=000000"
                  alt="Twitter"
                  className="rounded-full h-8"
                />
              </a>
              <a href="https://facebook.com">
                <img
                  src="https://img.icons8.com/?size=100&id=jZ0kw76QEzJU&format=png&color=000000"
                  alt="Facebook"
                  className="rounded-full h-8"
                />
              </a>
              <a href="https://linkedin.com">
                <img
                  src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"
                  alt="LinkedIn"
                  className="rounded-full h-8"
                />
              </a>
              <a href="https://instagram.com">
                <img
                  src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000"
                  alt="Instagram"
                  className="rounded-full h-8"
                />
              </a>
              <a href="https://whatsapp.com">
                <img
                  src="https://img.icons8.com/?size=100&id=DUEq8l5qTqBE&format=png&color=000000"
                  alt="WhatsApp"
                  className="rounded-full h-8"
                />
              </a>
            </div>
          </div>
          <div className="contact ml-5 w-full ">
            <h2 className="text-3xl font-cursive underline mb-3">
              Get In Touch
            </h2>
            <div className=" Footer-address flex flex-col gap-1 mb-2">
              <h2 className="flex items-center justify-start font-Pompiere text-3xl font-semibold">
                <img
                  src="https://img.icons8.com/?size=100&id=U1cbNtgDXO2m&format=png&color=000000"
                  alt="Address Icon"
                  className="h-8 mr-4"
                />
                Address
              </h2>
              <p className="ml-12">
                NEAR BBN SCHOOL UTTAM NAGAR WEST NEW DELHI 110059
              </p>
            </div>

            <div className="footer-email flex-col gap-1 mb-2">
              <h2 className="flex items-center justify-start font-Pompiere text-3xl font-semibold">
                <img
                  src="https://img.icons8.com/?size=100&id=GoQbcSSHazaK&format=png&color=000000"
                  alt="Email Icon"
                  className="h-8 mr-4"
                />
                Email
              </h2>
              <a href="mailto:info@indiantutorexpert.com" className="ml-12">
                info@indiantutorexpert.com
              </a>
            </div>
            <div className="footer-phone flex flex-col gap-1 mb-2">
              <h2 className="flex items-center justify-start font-Pompiere text-3xl font-semibold">
                <img
                  src="https://img.icons8.com/?size=100&id=hTTzWSpAOgIV&format=png&color=000000"
                  alt="Phone Icon"
                  className="h-8 mr-4"
                />
                Phone
              </h2>

              <a className="ml-12" href="tel:+91 99911 51054">
                9991151054
              </a>
            </div>
          </div>

          <div className="QuickLinks flex flex-col w-full  ">
            <h2 className="underline text-3xl font-cursive mb-3">Quick Links</h2>
            <div className="flex flex-col  font-roboto gap-2 justify-center items-center">
            <a href="#home" className="text-white text-xl my-0">{" Home"}</a>
              <a href="#about" className="text-white text-xl my-0">{" About Us"}</a>
              <a href="#classes" className="text-white text-xl my-0">{" Our Services"}</a>
              <a href="#payments" className="text-white text-xl my-0">{" Payments"}</a>
              <a href="#contact" className="text-white text-xl my-0">{" Contact Us"}</a>
            </div>
          </div>
        <div className="QuickEnquiry flex w-full flex-col items-start  ">
          <h2 className="underline text-3xl font-cursive mb-3">Quick Enquiry</h2>
          <form className="footerForm flex flex-col mt-4 text-black bg-transparent">
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-black px-2 pr-12 pl-4 py-3 rounded-xl"
            />
            <select
              name="type"
              value={credentials.type}
              onChange={handleChange}
              className="Select-catogry border border-black w-full  text-black pr-12 pl-4 py-3 rounded-xl"
            >
              <option value="Student" className="rounded-xl ">Student</option>
              <option value="Teacher"className="rounded-xl">Teacher</option>
            </select>
            <input
              type="phone"
              name="phone"
              value={credentials.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="border border-black w-full mb-2  pr-12 pl-4 py-3 rounded-xl"
            />
          </form>
          <button type="submit" className="footer-button bg-orange-400 px-3 text-2xl py-1 mx-16 rounded-2xl  ">Send</button>
        </div>
        </div>

    </>
  );
}

export default Footer;


