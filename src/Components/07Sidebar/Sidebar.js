import React from 'react'
import { FaHome, FaInfoCircle, FaPhoneAlt, FaTimes } from 'react-icons/fa';

export default function Sidebar() {

  const [openSidebar, setOpenSidebar] = React.useState(true)
  return (
    <div>
      <aside className={`absolute min-h-screen bg-gray-200 w-full sm:w-96 transition-all duration-700 ease-linear transform ${openSidebar? 'translate-x-0 z-20 visible': '-translate-x-full hidden'}`}>
        <div className='flex justify-end pe-5 items-center h-16'>
            <button className='' onClick={""}>
                <FaTimes className='text-xl text-blue-500 hover:text-blue-700'/>
            </button>
        </div>

        <div className='flex flex-col font-semibold tracking-wider mt-5 px-5 gap-5'>
            <div className='flex gap-5'>
                <FaHome className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>Home</span>
            </div>
            <div className='flex gap-5'>
                <FaInfoCircle className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>About</span>
            </div>
            <div className='flex gap-5'>
                <FaPhoneAlt className='text-xl text-blue-500 hover:text-blue-700'/>
                <span>Contact</span>
            </div>
        </div>
      </aside>
    </div>
  )
}
