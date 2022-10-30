import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import Logo from "../../public/logo.png"
import Button from '../button'

function Navbar() {
  const [isOpen, setIsOpen] = useState("hidden")
  const navControl=()=>{
    if(isOpen=="hidden"){
      setIsOpen("block")
    }else{
      setIsOpen("hidden")
    }
  }
  return (
    <nav className="flex md:fixed w-screen z-20 items-center justify-between flex-wrap p-4 px-16" style={{backgroundColor:"#102235"}}>
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
    <span className="font-semibold text-xl tracking-tight">
      <Link href={"/"}>
        <Image src={Logo} width="100px" height={"60px"} alt="logo"/>
      </Link>
      </span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white" style={{color:"#fff", borderColor:"#fff"}} onClick={navControl}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`w-full block ${isOpen} flex-grow lg:flex lg:items-center lg:w-auto md:text-center`}>
    <div className="text-sm lg:flex-grow">
      <Link href="/">
        <a  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 md:px-4">
          About Us
        </a>
      </Link>
        <Link href="/services" >
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 md:px-4">
            Services
          </a>
        </Link>
        <Link href="/contact">
            <a   className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white md:px-4">
              Contact Us
            </a>
        </Link>
    </div>
    <div>
      <Button text={"Book Appointment"} bg={"#C19023"}/>
    </div>
  </div>
</nav>
  )
}

export default Navbar
    // <div className='fixed top-0 left-0 z-10 bg-navDarkGold'>
    //     <div className='flex justify-between w-screen p-5'>
    //         <div>
    //             <Image src={Logo} alt="logo" width={"150px"} height={"50px"}/>
    //         </div>
    //         <div>
    //           <ul className='list-none flex space-x-5 pt-4'>
    //             <li>About Us</li>
    //             <li>Services</li>
    //             <li>Contact Us</li>
    //           </ul>
    //         </div>
    //         <div className=''>
    //         <button className='bg-mainGold p-3 mb-1 md:mb-0 rounded text-white text-1xl mr-5'>Book appointmenmt</button>
    //         </div>
    //     </div>

    // </div>