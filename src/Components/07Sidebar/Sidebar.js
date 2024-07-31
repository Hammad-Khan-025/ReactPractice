import React from 'react'
import { FaHome, FaInfoCircle, FaPhoneAlt, FaTimes } from 'react-icons/fa';

export default function Sidebar({openSidebar, hideSidebar}) {
  return (
    <div>
      <aside className={`absolute min-h-screen bg-gray-200 w-full sm:w-96 transition-transform duration-500 transform ${openSidebar? 'translate-x-0': '-translate-x-full'}`}>
        <div className='flex justify-end pe-5 items-center h-16'>
            <button className='hover:bg-red-500 transition rounded p-1 text-xl bg-white hover:text-white text-blue-500' onClick={hideSidebar}>
                <FaTimes className='  '/>
            </button>
        </div>

        <div className='flex flex-col font-semibold tracking-wider mt-5 px-5 gap-5'>
            <div className='flex gap-5 cursor-pointer'>
                <FaHome className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>Home</span>
            </div>
            <div className='flex gap-5 cursor-pointer'>
                <FaInfoCircle className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>About</span>
            </div>
            <div className='flex gap-5 cursor-pointer'>
                <FaPhoneAlt className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>Contact</span>
            </div>
        </div>
      </aside>
    </div>
  )
}
