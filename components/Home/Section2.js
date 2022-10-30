import Image from 'next/image'
import React from 'react'
import Img from "../../public/Frame 86.png"
import Button from '../button'

function Section2() {
  return (
    <div className="">
        <div className='w-screen text-black text-center p-5 pt-10 flex flex-col space-y-1' style={{backgroundColor:"#ebebeb"}}>
            <span className='text-gray-500'>We have so much to offfer you to grow</span>
            <h1 className='text-4xl font-bold pb-5 text-bgBase'>About Us</h1>
        </div>
        <div className='md:flex  text-white items-center ' style={{backgroundColor:"#ffffff"}}>
            <div className='h-full w-full relative'>
              <Image src={Img} alt={"image"} className="rounded"/>
              <div className='w-fit h-fit bg-bgBase absolute md:top-40 p-2 md:-right-10 right-0 top-0 z-10'>
                <h1 className='text-5xl font-bold'>James</h1>
                <h1 className='text-4xl fancy'>Royce</h1>
              </div>
          </div>
          <div className='pr-10 flex flex-col space-y-5 md:pl-20 pl-8 py-5'>
              <h1 className='font-bold text-5xl text-mainGold' >Hello!</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"My Cv"} bg={"#C89B38"} className="px-20"/>
          </div>
        </div>
    </div>
  )
}

export default Section2