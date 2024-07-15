import React from 'react'

export default function TourCard({id,image,title,price,description, clearCard}) {

  const [readMore, setReadMore] = React.useState(false)


  function toggle(){
    setReadMore(prevState => !prevState)
  }

  return (
    <div>
      <div className='w-full sm:w-[450px] md:w-[390px] bg-white shadow-2xl rounded-xl overflow-hidden cards'>
            <img src={`../images/02Tours-images/${image}`} alt="tour img" className='h-60 w-full'/>
            <div className='p-5 bg-white'>
                <div className='flex justify-between font-semibold gap-5'>
                    <h1>{title}</h1>
                    <h2 className='text-blue-500'>${price}</h2>
                </div>
                <p className='my-5'>
                  {readMore ? description : `${description.substring(0,190)}...`}{" "}
                  <button className='text-blue-500 font-bold focus:ring-1 px-1 rounded-lg' onClick={toggle}>
                    {readMore ? "Show Less" : "Read More"}
                  </button>
                </p>
                <div className='text-center'>
                  <button className='font-semibold border border-red-500 text-white bg-red-500 hover:bg-white hover:text-red-500 px-3 py-1 rounded' onClick={()=> clearCard(id)}>Not Interested</button>
                </div>
            </div>
        </div>
    </div>
  )
}
