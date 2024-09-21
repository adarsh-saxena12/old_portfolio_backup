import Link from 'next/link'
import Button from '@/components/Button'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center mt-10 mb-20'>
    <div className='flex flex-row justify-center text-center items-center mt-10 mb-10'>
      <h2 className='font-bold text-2xl mr-10'>Not Found <span className='text-slate-600 ml-10'>|</span></h2>
      <p className='text-slate-600'> Could not find requested resource</p>
    </div>
      <Button 
      label='Back To Home'
      buttonStyle='bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center mb-10'
      fontSize='xl'
      onClick='/'
      /> 
    </div>
  )
}