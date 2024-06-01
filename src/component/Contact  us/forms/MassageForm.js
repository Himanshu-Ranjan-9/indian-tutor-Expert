// import React, { useState } from 'react'
// import axios from 'axios';
// function MassageForm() {

//     const [formData, setFormData] = useState({
//         name: '',
//         contact: '',
//         profession:'',
//         inquiry: '',
//       });
    
//       const onChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [id]: value,
//         }));
//       };
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:5000/inquiries', formData);
//           console.log(response.data);
//         } catch (error) {
//           console.error('There was an error!', error);
//         }
//       };
    
    

//   return (
//     <div>

// <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg text-center mx-auto flex flex-col"
//     >
//         <h3 className="text-orange-600 font-Pompiere text-4xl font-bold">
//           Get Call-Back
//         </h3>
//             <form onSubmit={handleSubmit} className={`flex} 

//             `}>
//           <div className={`text-input flex `}>
//             <input
//               type="text"
//               id="name"
//               placeholder="Full Name"
//               className="border-2 border-black rounded-3xl p-2 w-full"
//               onChange={onChange}
//             />
//             <input
//               type="tel"
//               id="phone" 
//               name="contact"
//               placeholder="Contact no."
//               pattern="[0-9]{3} [0-9]{2} [0-9]{3}"
//               className="border-2 border-black rounded-3xl p-2 w-full"
//               required

//               onChange={onChange}
//             />
//           </div>

            
//       <div className='lower-section'>


//           <select
//               name="type"
//               // value={credentials.type}
//               onChange={handleChange}
//               className="client-catogery border border-black w-full mb-2 text-black  rounded-full"
//             >
//               <option value="Student" className="rounded-xl ">Student</option>
//               <option value="Teacher"className="rounded-xl">Teacher</option>
//             </select>

//       </div>
//           <button
//             type="submit"
//             className="bg-blue-300 text-white p-2 rounded-3xl transition-colors duration-300 hover:bg-blue-700"
//           >
//             Send Message
//           </button>
//         </form>

      
//     </div>
//     </div>
//   )
// }

// export default MassageForm

import React, { useState } from 'react';
import axios from 'axios';

function MassageForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    profession: '',
    inquiry: '',
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/inquiries', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="bg-white bg-opacity-30 p-5 rounded-lg shadow-lg text-center mx-auto flex flex-col">
      <h3 className="text-orange-600 font-Pompiere text-4xl font-bold">
        Get Call-Back
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="border-2 border-black rounded-3xl p-2 w-full"
            onChange={onChange}
            required
          />
          <input
            type="text"
            id="contact"
            placeholder="Contact no."
            className="border-2 border-black rounded-3xl p-2 w-full"
            // pattern="[0-9]"
            onChange={onChange}
            required
          />
          <select
            id="profession"
            className="border border-black w-full mb-2 text-black rounded-full"
            onChange={onChange}
            required
          >
            <option value="">Select Profession</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <textarea
            id="inquiry"
            placeholder="Your inquiry"
            className="border-2 border-black rounded-3xl p-2 w-full"
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 text-white p-2 rounded-3xl transition-colors duration-300 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default MassageForm;
