"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook,  FaTiktok, FaInstagram, FaWhatsapp, FaPhone  } from "react-icons/fa";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

 

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (

    <div className="md:flex bg-[#FFF8EE]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md "
      >

        <div className='md:flex md:space-x-24 md:mx-24 '>
        <div className='w-full md:w-2/5 '>

            <div className=' rounded-lg'>
                <h3 className=' text-bold mx-4  mt-12 mb-12  text-3xl'>Get In Touch</h3>
                <div className='mx-4'>
                <h4 className=' py-1 text-bold text-white'>Visit Us</h4>
                <p className='py-1.5'>Come and say hello to our office HQ Bunamwaya-Kisigula road, around 100 meters off Bunamwaya-wankuluku road</p>
                <h4 className=' py-2 text-bold text-white'>Chat To Us</h4>
                <p className='py-1.5'>Our  friendly team is here to help </p>
                <ul className="">
                <Link
                  href="https://wa.me/256758567701" target='_blank'
                  className="flex p-4 space-x-4 items-center"
                >
                  <FaWhatsapp />
                  <span>+256 758567701</span>

                </Link>
                <Link
                  href="tel:+256758567701" target='_blank'
                  className="flex p-4 space-x-4 items-center"
                >
                  <FaPhone/>
                  <span>+256 742 773750</span>


                </Link>
                </ul>

                <h4 className=' py-2 text-bold text-white'>Call Us</h4>
                <p className='py-1.5'>Monday to Sunday from 7 to 12 midnight</p>

                <h4 className=' py-4 text-bold'>Social Media</h4>
                <ul className="flex space-x-2  md:space-x-5 mt-4">
                <Link
                  href="https://www.facebook.com/A&RS Solutions Ltd"
                  className="inline"
                >
                  <FaFacebook />

                </Link>

                <Link
                  href="https://twitter.com/A&RS Solutions Ltd"
                  className="inline"
                >
                  <FaTiktok/>
                </Link>
                

                {/** <!--<li><a href="#"><i class="fab fa-vimeo-v"></i></a></li> */}
               
                <Link
                  href="#"
                  className="inline"
                >
                 <FaInstagram/>
                </Link>
              </ul>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className='w-full md:w-3/5'>
          <h2 className='text-bold text-center mt-12 mb-12 md:py-0 text-3xl'>Send us a Message </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>


          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#FF9900] hover:bg-[#FBBE63] text-white w-full text-white p-2 rounded  focus:outline-none"
          >
            Send Message
          </button>
        </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
