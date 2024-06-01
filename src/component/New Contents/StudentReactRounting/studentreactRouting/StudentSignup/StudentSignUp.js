

// import React, { useState } from 'react';
// import "./StudentSignUp.css"

// const Step1 = ({ StudentformData, setStudentFormData, nextStep }) => (
//     <div ClassClass="form-step">
// <input
//             type="text"
//             placeholder='Enter Class'
//             id="Class"
//             Class="Class"
//             value={StudentformData.Class}
//             onChange={(e) => setStudentFormData({ ...StudentformData, Class: e.target.value })}
//             required
//         />
        
// <input
//             type="text"
//             placeholder='Enter Contact'
//             id="contact"
//             Class="contact"
//             value={StudentformData.contact}
//             onChange={(e) => setStudentFormData({ ...StudentformData, contact: e.target.value })}
//             required
//         />
        
// <input
//             type="email"
//             placeholder="Enter Email"
//             id="email"
//             Class="email"
//             value={StudentformData.email}
//             onChange={(e) => setStudentFormData({ ...StudentformData, email: e.target.value })}
//             required
//         />
//         <input
//             type="password"
//             placeholder="Enter password"
//             id="password"
//             Class="password"
//             value={StudentformData.password}
//             onChange={(e) => setStudentFormData({ ...StudentformData, password: e.target.value })}
//             required
//         />
        
// <input
//             type="text"
//             placeholder='Enter Your Location'
//             id="location"
//             Class="location"
//             value={StudentformData.location}
//             onChange={(e) => setStudentFormData({ ...StudentformData, location: e.target.value })}
//             required
//         />
        
//         <button type="button" onClick={nextStep}>Next</button>
//     </div>
// );

// const Step2 = ({ StudentformData, setStudentFormData, prevStep, handleSubmit }) => (
//     <div ClassClass="form-step">
// <input
//             type="text"
//             placeholder='Entter your Subject'
//             id="Subject"
//             Class="Subject"
//             value={StudentformData.Subject}
//             onChange={(e) => setStudentFormData({ ...StudentformData, Subject: e.target.value })}
//             required
//         />
        
// <input
//             type="text"
//             placeholder='Enter Class'
//             id="Class"
//             Class="Class"
//             value={StudentformData.Class}
//             onChange={(e) => setStudentFormData({ ...StudentformData, Class: e.target.value })}
//             required
//         />
// <input
//             type="text"
//             placeholder='Enter_Session'
//             id="session"
//             Class="session"
//             value={StudentformData.session}
//             onChange={(e) => setStudentFormData({ ...StudentformData, session: e.target.value })}
//             required
//         />
// <input
//             type="text"
//             placeholder='Approx Fees'
//             id="Approx_Fee"
//             Class="Approx_Fee"
//             value={StudentformData.Approx_Fee}
//             onChange={(e) => setStudentFormData({ ...StudentformData, Approx_Fee: e.target.value })}
//             required
//         />
// <input
//             type="text"
//             placeholder='Enter Board Class'
//             id="board"
//             Class="board"
//             value={StudentformData.board}
//             onChange={(e) => setStudentFormData({ ...StudentformData, board: e.target.value })}
//             required
//         />
        

        


        

        

//         <div ClassClass='flex'>

//         <button type="button" onClick={prevStep}
//         //  ClassClass="ghost bg-transparent border-2 border-white text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider mt-4 transform transition-transform duration-75 active:scale-95"
// >Previous</button>
//         <button type="submit" onClick={handleSubmit} 
//         // ClassClass="ghost bg-transparent border-2 border-white text-white py-2 px-6 rounded-full uppercase text-sm font-bold tracking-wider mt-4 transform transition-transform duration-75 active:scale-95"
// >Submit</button>
//         </div>
//     </div>
// );

// const StudentsignUp = () => {
//     const [step, setStep] = useState(1);
//     const [StudentformData, setStudentFormData] = useState({
//         Class: '',
//         Class: '',
//         Subject: '',
//         session :'',
//         Approx_Fee:'',
//         location: '',
//         contact: '',
//         email: '',
//         password:'',
//         board:'',
//     });

//     const nextStep = () => setStep(step + 1);
//     const prevStep = () => setStep(step - 1);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(StudentformData);
        


//     };

//     return (
//         <div ClassClass="Student-signup-container">
//         <h2 ClassClass='font-bold text-2xl'>Sign up</h2>
//             {/* <form onSubmit={handleSubmit}> */}
//                 {step === 1 && <Step1 StudentformData={StudentformData} setStudentFormData={setStudentFormData} nextStep={nextStep} />}
//                 {step === 2 && <Step2 StudentformData={StudentformData} setStudentFormData={setStudentFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
//             {/* </form> */}
//         </div>
//     );
// };

// export default StudentsignUp;

// ----------------------------------------------------------------------
import React, { useState } from 'react';
import axios from 'axios';
import "./StudentSignUp.css";

const Step1 = ({ StudentformData, setStudentFormData, nextStep }) => (
    <div className="form-step">
        <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            value={StudentformData.name}
            onChange={(e) => setStudentFormData({ ...StudentformData, name: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder="Enter Contact"
            id="contact"
            name="contact"
            value={StudentformData.contact}
            onChange={(e) => setStudentFormData({ ...StudentformData, contact: e.target.value })}
            required
        />
        <input
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            value={StudentformData.email}
            onChange={(e) => setStudentFormData({ ...StudentformData, email: e.target.value })}
            required
        />
        <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={StudentformData.password}
            onChange={(e) => setStudentFormData({ ...StudentformData, password: e.target.value })}
            required
        />


        <input
            type="text"
            placeholder="Enter Your Location"
            id="location"
            name="location"
            value={StudentformData.location}
            onChange={(e) => setStudentFormData({ ...StudentformData, location: e.target.value })}
            required
        />
        <button type="button" onClick={nextStep}>Next</button>
    </div>
);

const Step2 = ({ StudentformData, setStudentFormData, prevStep, handleSubmit }) => (
    <div className="form-step">
        <input
            type="text"
            placeholder="Enter your Subject"
            id="Subject"
            name="Subject"
            value={StudentformData.Subject}
            onChange={(e) => setStudentFormData({ ...StudentformData, Subject: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder="Enter Class"
            id="Class"
            name="Class"
            value={StudentformData.Class}
            onChange={(e) => setStudentFormData({ ...StudentformData, Class: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder="Approx Fees"
            id="Approx_Fee"
            name="Approx_Fee"
            value={StudentformData.Approx_Fee}
            onChange={(e) => setStudentFormData({ ...StudentformData, Approx_Fee: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder="Enter Board Name"
            id="board"
            name="board"
            value={StudentformData.board}
            onChange={(e) => setStudentFormData({ ...StudentformData, board: e.target.value })}
            required
        />
        <div className='flex'>
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
);

const StudentSignUp = () => {
    const [step, setStep] = useState(1);
    const [StudentformData, setStudentFormData] = useState({
        name: '',
        Subject: '',
        email: '',
        contact: '',
        Class: '',
        Approx_Fee: '',
        location: '',
        password: '',
        board: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/StudentSignUp', StudentformData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="Student-signup-container">
            <h2 className="font-bold text-2xl">Sign up</h2>
            {step === 1 && <Step1 StudentformData={StudentformData} setStudentFormData={setStudentFormData} nextStep={nextStep} />}
            {step === 2 && <Step2 StudentformData={StudentformData} setStudentFormData={setStudentFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
        </div>
    );
};

export default StudentSignUp;
