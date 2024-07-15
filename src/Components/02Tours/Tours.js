import React from 'react'
import TourCard from './TourCard'
import ToursData from './ToursData'

export default function Tours() {

  const [tours, setTours] = React.useState(ToursData)

  const clearCard = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  
  const refresh = () => {
    setTours(ToursData)
  }

  const cardElements = tours.map((items)=>{
    return(
      <TourCard 
        {...items}
        clearCard={clearCard}
      />
    )
  })

  if (tours.length === 0) {
    return(
      <div className='text-center pt-10 font-bold tracking-wider min-h-screen bg-gray-200'>
        <h1 className='text-2xl md:text-3xl uppercase'>No Tours Left</h1>
        <button className='bg-blue-500 text-white px-3 py-1 mt-5 rounded-lg' onClick={refresh}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='flex justify-center py-10 tracking-wider min-h-screen bg-gray-200'>

      <div className='mx-5 sm:mx-0'>
        <h1 className='text-center text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2'>our tours</h1>
        <div className="flex justify-center">
          <div className='w-20 h-1 bg-blue-500 rounded-full mb-10'></div>
        </div>
        
          
        <div className='flex flex-wrap justify-center gap-10 sm:mx-10'>
          {cardElements}
        </div>

      </div>

    </div>
  )
}
