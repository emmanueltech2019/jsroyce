// import Image from 'next/image'
import React from 'react'
import Img from "../../public/Aboutimg.png"
import Button from '../button'
function Section1() {
  return (
    <div className='bg-mainSilver py-20'>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5' >
          <div className='h-full w-full relative'>
              <img src={Img.src} alt={"image"} className="rounded"/>
          </div>
          <div className='md:pl-10 py-5 flex flex-col space-y-3 w-fit'>
              <span className='text-gray-500'>Let&apos;s grow your medical practice.</span>
              <h1 className='font-bold text-5xl text-bgBase'>Growth Partnerships<br/></h1>
              <p className='text-gray-500 pb-5'>Do you want to build a medical practice? Are you doctorpreneur planning a growth strategy for your private medical business  ? To achieve any of these goals, you’ll need to do one thing: collaborate with us as a growth partner  to grow your business.It is pertinent that you make growth partnership an integral part of your business strategy.</p>
              <p className='text-gray-500 pb-5'>We have a plethora of strategies  to expedite the growth of your medical practice. There are also ways to kick-start organic growth in your medical  business. But what is organic growth and how can you make it work for you?</p>
              <Button text={"Book Appointment"}  className="mt-5 mainGold" bg2={"#f7cc0a"}/>
          </div>
      </div>
    </div>
  )
}

export default Section1