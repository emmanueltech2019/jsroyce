import Image from 'next/image'
import React from 'react'
import Img from "../../public/Aboutimg.png"
import Button from '../button'
function Section1() {
  return (
    <div className='bg-mainSilver py-20'>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5' >
          <div className='h-full w-full relative'>
              <Image src={Img} alt={"image"} className="rounded"/>
          </div>
          <div className='md:pl-10 py-5 flex flex-col space-y-3'>
              <span className='text-gray-500'>I am  here to help</span>
              <h1 className='font-bold text-5xl text-bgBase'>Acquire more<br/>patients</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"Book Appointment"}  className="mt-5 mainGold" bg2={"#f7cc0a"}/>
          </div>
      </div>
    </div>
  )
}

export default Section1