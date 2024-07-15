import React from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SingleQuestion({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className='bg-white px-5 sm:px-8 py-5 mb-6 w-full sm:w-[550px] rounded overflow-hidden'>
      <div className='flex items-center justify-between gap-5'>
        <h1 className='font-bold'>{question}</h1>

        <button onClick={() => onToggle(id)}>
          {isOpen ? 
          <FaChevronUp className='cursor-pointer text-base'/> : 
          <FaChevronDown className='cursor-pointer text-base'/>}
        </button>
        
      </div>
      {isOpen && <p className=' mt-2'>{answer}</p>}
    </div>
  )
}
