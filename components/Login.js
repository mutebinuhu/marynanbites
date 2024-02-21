// src/components/LoginForm.js
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Alert from './Alert';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(username, phoneNumber),
        });
  
        if (response.ok) {
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
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      {showAlert && <Alert type="success" message="User Logged In 😊"/>}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div cla
      ssName="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className="w-full p-2 border rounded-md"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button
            type="submit"
            className="w-full mt-4 bg-[#FF9900] hover:bg-[#FBBE63] text-white py-2 rounded-md  transition duration-300">
           Login
    </button>
    </motion.form>
  );
};

export default LoginForm;
