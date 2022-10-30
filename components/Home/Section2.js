import Image from 'next/image'
import React from 'react'
import Img from "../../public/Frame 86.png"

function Section2() {
  return (
    <div className="">
        <div className='w-screen text-black text-center p-5 pt-10 flex flex-col space-y-1' style={{backgroundColor:"#ebebeb"}}>
            <span>We have so much to offfer you to grow</span>
            <h1 className='text-4xl'>About Us</h1>
            <button>View Our Service</button>
        </div>
        <div className='md:flex  text-white items-center ' style={{backgroundColor:"#ffffff"}}>
            <div className='h-full w-full relative'>
              <Image src={Img} alt={"image"} className="rounded"/>
          </div>
          <div className='pr-10 flex flex-col space-y-5 pl-20'>
              <h1 className='font-bold text-5xl' style={{color: "#C89B38"}}>Hello!</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
          </div>
        </div>
        {/* <div className='p-20' style={{backgroundColor:"#1C1C1C"}}>

        </div> */}
    </div>
  )
}

export default Section2