import React from 'react'
import { FaTimes } from 'react-icons/fa';


export default function Modal() {

  const [openModal, setOpenmodal] = React.useState(false)

  return (
    <div className={`flex justify-center items-center min-h-screen bg-blue-200 bg-opacity-70 absolute w-full ${openModal? 'opacity-full visible':'opacity-0 hidden'}`}>
      <div className='flex justify-center items-center gap-10 bg-black py-10 px-5 rounded w-96 min-h-52 relative'>
        <div className='absolute top-5 right-5'>
          <button  onClick={""}><FaTimes className='text-xl text-white'/></button>
        </div>

        <h2 className='text-center font-bold tracking-wider text-xl text-white'>Modal Content</h2>
    </div>
    </div>
  )
}
