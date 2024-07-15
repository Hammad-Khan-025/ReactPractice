import React from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Modal from './Modal';

export default function SidebarModal() {

const [openSidebar, setOpenSidebar] = React.useState(false)
const [openModal, setOpenModal] = React.useState(false)

const displaySidebar =  () => {
    setOpenSidebar(true)
}
const hideSidebar =  () => {
    setOpenSidebar(false)
}
const displayModal =  () => {
    setOpenModal(true)
}
const hideModal =  () => {
    setOpenModal(false)
}

  return (
    <div>
        <Sidebar/>  
        <Modal/>
        <div className=' flex ps-10 bg-black items-center h-16 z-10'>
            <button  onClick={""}>
                <FaBars className='text-xl text-white'/>
            </button>
        </div>

        <div className='flex justify-center items-center min-h-[calc(100vh-64px)] z-10'>
            <button className='bg-black text-white px-3 py-1 rounded font-semibold hover:bg-white hover:text-black border-2 border-black'   onClick={""}>Show modal</button>
        </div>
    </div>
  )
}
