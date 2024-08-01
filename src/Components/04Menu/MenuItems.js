import React from 'react'

export default function MenuItems({id,title,price,img,description,category}) {
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 mx-5 '>
        <img src={`${process.env.PUBLIC_URL}/images/04Menu-images/${img}`} alt=""  className='w-full sm:w-52 h-full rounded-lg border-2 border-amber-500'/>

        <div className='w-full sm:w-96 lg:w-80 sm:px-5 tracking-wider'>

          <div className='flex justify-between font-bold border-b-gray-300 border-b-2 mb-3'>
            <h1 className='capitalize'>{title}</h1>
            <h2 className='text-amber-500'>${price}</h2>
          </div>
          <p>{description}</p>

        </div>
      </div>
    </div>
  )
}
