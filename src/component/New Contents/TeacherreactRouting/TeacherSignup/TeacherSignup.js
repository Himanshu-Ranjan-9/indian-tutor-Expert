import React, { useState } from 'react';
import axios from 'axios';
import "./TeacherSignUp.css";

const Step1 = ({ formData, setFormData, nextStep }) => (
    <div className="form-step">
        <input
            type="text"
            placeholder='Enter Name'
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder='Enter Contact'
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
        />
        <input
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder='Enter your Subject'
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
        />
        <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
        />
        <button type="button" onClick={nextStep}>Next</button>
    </div>
);

const Step2 = ({ formData, setFormData, prevStep, handleSubmit }) => (
    <div className="form-step">
        <input
            type="text"
            placeholder='Enter Class'
            id="class"
            name="class"
            value={formData.class}
            onChange={(e) => setFormData({ ...formData, class: e.target.value })}
            required
        />
        <select
            id="mode"
            name="mode"
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
            required
        >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
        </select>
        <input
            type="text"
            placeholder='Your Highest Qualification'
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            required
        />
        <input
            type="text"
            placeholder='Enter Your Experience'
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            required
        />
        <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
        >
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <textarea
            id="remarks"
            name="remarks"
            placeholder='Enter Remarks'
            value={formData.remarks}
            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
        ></textarea>
        <div className='flex'>
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
);

const TeacherSignup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        contact: '',
        class: '',
        mode: '',
        qualification: '',
        experience: '',
        gender: '',
        remarks: '',
        password: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/TeacherSignup', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="Teacher-signup-container">
            <h2 className='font-bold text-2xl'>Sign up</h2>
            {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <Step2 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
        </div>
    );
};

export default TeacherSignup;
