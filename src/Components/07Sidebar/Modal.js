import React from 'react'
import { FaTimes } from 'react-icons/fa';


export default function Modal({openModal, hideModal}) {

  return (
    <div className={`flex justify-center items-center min-h-screen bg-blue-400 transition-opacity duration-300 bg-opacity-70 absolute w-full px-3 sm:px-0 ${openModal? 'opacity-full visible':'opacity-0 hidden'}`}>
      <div className='flex justify-center items-center gap-10 bg-black py-10 px-5 rounded w-96 min-h-52 relative'>

          <button  onClick={hideModal} className='absolute top-5 right-5 hover:bg-red-600 p-1'><FaTimes className='text-xl text-white font-thin'/></button>
        

        <h2 className='text-center font-bold tracking-wider text-xl text-white'>Modal Content</h2>
    </div>
    </div>
  )
}
