'use client'

import { useState } from 'react';
import Button from './Button';
import SendEmail from './Send-Email';

interface eventProps {
    e:SubmitEvent,
}

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
       
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle the form submission logic here
    await SendEmail(formData);

  alert(`Thank you for submitting the form ${formData.name}😍. I will contact you shortly`);
 
  };

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col items-center bg-slate-50 py-20 pt-10 px-20 shadow-indigo-600 mb-20 xl:w-[40%] w-[70%] border-2 border-indigo-600 rounded-2xl'>
      <div className='w-full'>

      <div className='flex flex-col items-start w-full'>
        <label htmlFor="name" className='font-bold text-xl text-slate-600 py-6'>Name</label>
        
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='w-[100%] bg-slate-300 md:h-[60px] h-[55px] rounded-xl p-6 cursor-pointer text-2xl border-2 focus:outline-none border-indigo-200 focus:border-indigo-600'
          placeholder='Enter Your Name'
          required
    
        />
      </div>

      </div>

      <div className='w-full'>

      <div className='flex flex-col items-start xl:mt-10 mt-4 w-full'>
        <label htmlFor="email" className='font-bold text-xl text-slate-600 py-6'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='w-[100%] bg-slate-300 rounded-xl md:h-[60px] h-[55px] p-6 cursor-pointer text-2xl border-2 focus:outline-none border-indigo-200 focus:border-indigo-600'
          placeholder='Enter Your Email'
          required
        />
      </div>

      </div>

      <div className='w-full'>

      <div className='flex flex-col items-start xl:mt-10 mt-4 w-full'>
        <label htmlFor="message" className='font-bold text-xl text-slate-600 py-6'>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className='w-[100%] bg-slate-300 rounded-xl h-40 p-6 cursor-pointer text-2xl border-2 focus:outline-none border-indigo-200 focus:border-indigo-600'
          placeholder='Enter Your Message'
        />
      </div>

      </div>
      <div>
        <button
        type="submit"
        className='bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center font-2xl'
        //onSubmit={handleSubmit}  
        >
            SUBMIT
        </button>

        {/* <Button 
        label='SUBMIT'
        buttonStyle='bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center'
        fontSize='font-2xl'
        /> */}
      </div>
    </form>
  );
};

export default Form;