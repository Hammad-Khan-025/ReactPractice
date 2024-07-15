import React from 'react'
import MenuItems from './MenuItems'
import MenuData from './MenuData'
const url = "https://course-api.com/react-tabs-project"

export default function Menu() {

const [menuItems, setMenuItems] = React.useState(MenuData)

const filterItems = (category) => {

  if(category === "all"){
    setMenuItems(MenuData)
    return;
  }

  const newItems = MenuData.filter((item)=> item.category === category)
      setMenuItems(newItems)
}

const menuElements = menuItems.map((items)=>{
    return(
        <MenuItems
            {...items}
        />
    )
})

  return (
    <div className='py-10 bg-gray-100 min-h-screen'>

      <div className='flex flex-col items-center tracking-wider'>
        <h1 className='text-2xl sm:text-3xl uppercase font-bold'>our menu</h1>
        <div className='w-20 h-1 bg-amber-500 mt-2 rounded-full'></div>
      </div>

      <div className='flex gap-5 justify-center flex-wrap font-bold my-8 tracking-wider'>
        <button className='menu-btns' onClick={()=> filterItems("all")}>All</button>
        <button className='menu-btns' onClick={()=> filterItems("breakfast")}>Breakfast</button>
        <button className='menu-btns' onClick={()=> filterItems("lunch")}>Lunch</button>
        <button className='menu-btns' onClick={()=> filterItems("shakes")}>Shakes</button>
      </div>

     
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-5 gap-8 justify-items-center'>
        {menuElements}
      </div>

    </div>
  )
}
