// Register.js
import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";
import './register.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Banner from './assets/banner.png';



const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    degree: '',
    college: '',
    CGPA: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with the form data
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
      navigate("registered")
      // Clear the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        degree: '',
        college: '',
        CGPA: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <div className='banner1'>
          <img src={Banner} alt="" />
          <h1>Registration</h1>
          <p>Welcome! Stay in tune with personalized content and KPMG thought leadership subscriptions.</p>
        </div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <p>Enter your First name : </p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <p>Enter your last name : </p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <p>Enter your Email : </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <p>Enter your phone number : </p>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <p>Enter Education Degree :</p>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Degree"
            required
          />
          <p>Enter your college name :</p>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="College"
            required
          />
          <p>Enter your Final year CGPA :</p>
          <input
            type="text"
            name="CGPA"
            value={formData.CGPA}
            onChange={handleChange}
            placeholder="CGPA"
            required
          />
          <input type="file" name="" id="" placeholder='Resume'/>
          <div className="agreement">
            <div className="agreement-checkbox flex items-center content-center">
              <input type="checkbox" required name="" id="checkbox" />
              <p>Required*</p>
            </div>
            <p>Please tick the box if you consent to KPMGI sending you insights, event invitations and other benefits via email.</p>
          </div>
          <br />
          <div className="agreement flex flex-col">
            <div className="agreement-checkbox flex items-center content-center">
              <input type="checkbox" required name="" id="checkbox" />
              <p>Required*</p>
            </div>
            <p className='text-wrap'>
              By checking this box you consent to KPMGI sharing your personal data with its member firms for marketing purposes, including direct outreach regarding KPMG services.
              <br /><br />
              Note: You will receive an email after registration to verify and activate your account. Also you will have options to self-serve to set your preferences for content personalization, subscription to newsletter, opt-in and opt-out from email communication and delete your account any time after registration.
            </p>
          </div>
          <button type="submit" className='mt-5'>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
