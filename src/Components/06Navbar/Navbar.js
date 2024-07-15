import React, {useState, useRef, useEffect} from 'react'
import { FaFacebook, FaInstagram, FaLinkedin,FaBars,FaTimes } from 'react-icons/fa';


export default function Navbar() {

  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const calcLinkHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${calcLinkHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='min-h-screen'>
      <nav className='flex justify-around items-center h-20 shadow md:shadow-lg tracking-wider bg-white'>

        <h1 className='text-xl md:text-2xl font-bold uppercase text-blue-500 border-b-blue-500 border-2 bg-gray-50 px-2'><span className='text-4xl text-blue-800'>w</span>eb <span className='text-4xl text-blue-800'>D</span>eveloper</h1>

        {/* {`${showLinks? 'show-navbar-links navbar-links': 'navbar-links'}`} */}
        <div className="navbar-links" ref={linksContainerRef}>
            <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 py-5 md:py-0 font-semibold"  ref={linksRef}>
                <li><a href="" className='hover:text-blue-500 nav-link'>Home</a></li>
                <li><a href="" className='hover:text-blue-500 nav-link'>About</a></li>
                <li><a href="" className='hover:text-blue-500 nav-link'>Services</a></li>
                <li><a href="" className='hover:text-blue-500 nav-link'>Contact</a></li>
            </ul>
        </div>

        <div>
            <ul className='hidden md:flex gap-5'>
                <li><a href=""><FaFacebook className='text-xl text-blue-500 hover:text-blue-700'/></a></li>
                <li><a href=""><FaInstagram className='text-xl text-red-500 hover:text-red-700'/></a></li>
                <li><a href=""><FaLinkedin className='text-xl text-blue-500 hover:text-blue-700'/></a></li>
            </ul>
        </div>

        <button className='md:hidden text-xl text-blue-500 hover:text-blue-700 focus:ring-2 p-2 rounded' onClick={toggleLinks}>
            {showLinks? <FaTimes/> : <FaBars/>}
        </button>

      </nav>
    </div>
  )
}
