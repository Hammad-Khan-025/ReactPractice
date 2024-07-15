import React from 'react'
import BirthdayList from './BirthdayList'
import BirthdayData from './BirthdayData'

export default function Birthday() {

  const [people, setPeople] = React.useState(BirthdayData)

  function clearAll(){
    setPeople(prevState => prevState=[])
  }

  return (
    <div>
      <div className='flex justify-center items-center bg-pink-400 min-h-screen py-10'>
        <div className='bg-white p-8 tracking-widest w-96 shadow-2xl rounded mx-5 sm:mx-0'>
            <p className='mb-5 font-semibold text-violet-500'>{people.length} birthdays today</p>

            <BirthdayList people={people}/>
            
            <button className='bg-pink-400 hover:bg-pink-500 w-full text-white px-3 py-2 font-bold rounded mt-5' onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </div>
  )
}
