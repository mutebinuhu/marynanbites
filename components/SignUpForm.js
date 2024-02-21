"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Alert from './Alert';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    location: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
            username: '',
            phoneNumber: '',
            location: '',
          })

          setShowAlert(true)
          setTimeout(()=>{
            setShowAlert(false)
          window.location.href="/"
          }, 2000)

          

        
        // Optionally, you can redirect the user or perform other actions upon successful signup
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-md  mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Signup</h2>
      {showAlert && <Alert type="success" message="Account created 😊"/>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#FF9900] hover:bg-[#FBBE63] text-white py-2 rounded-md  transition duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SignUpForm;
