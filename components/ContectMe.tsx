import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";



type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

function ContectMe({}: Props) {
   const { register, handleSubmit, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen flex flex-col justify-evenly text-center
    md:text-left md-flex-row items-center mx-auto max-w-7xl relative">
      <h3 className='text-2xl absolute top-24 text-gray-500 tracking-[20px] uppercase'>
        contectMe
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{""}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

         <div className='space-y-10' >
           <div className='space-x-5 flex items-center justify-center'>
            <PhoneIcon className='h-6 w-6 rounded-full text-blue-500 animate-pulse' />
            <p className='text-2xl'>6477867378</p>
            </div>
            <div className='space-x-5 flex items-center justify-center'>
            <EnvelopeIcon className='h-6 w-6 rounded-full text-white-500 animate-pulse' />
            <p className='text-2xl'>mohib.000@gmail.com</p>
            </div>
            <div className='flex items-center justify-center space=-x-5'>
            <MapPinIcon className='h-6 w-6 rounded-full text-green-500 animate-pulse' />
            <p className='text-2xl'>2345 confederation Parkwy, ON Canada</p>
            </div>
        </div>

        <form
           onSubmit = {handleSubmit(onSubmit)} 
           className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className="space-x-2">
            <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
            <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register("message")} placeholder='Message' className='contactInput' />
          <button type='submit' className='bg-green-900 py-5 px-10 text-black font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContectMe