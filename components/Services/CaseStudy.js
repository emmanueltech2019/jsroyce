// import Image from 'next/image'
import React from 'react'
// import Img from "../../public/Rectangle 2 (6).png"
import Button from '../button'

function Choice() {
  return (
    <div className='bg-white'>
        <div className='bg-white p-20 text-black text-center'>
            <p>Some of the recent projects I have done</p>
            <h1 className='text-black font-bold font-30 capitalize text-4xl py-5 pb-10'>Our <span className='text-mainGold'>Case Studies</span></h1>
        </div>
        <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver' >
          <div className='pr-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>I am  here to help</span>
              <h1 className='font-bold text-5xl'>Acquire more<br/>patients</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#f7cc0a"}/>
          </div>
          <div className='h-full w-full relative'>
              {/* <Image src={Img} alt={"image"} className="rounded"/> */}
          </div>
      </div>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1' >
          <div className='h-full w-full relative'>
              <img src={Img.src} alt={"image"} className="rounded"/>
          </div>
          <div className='pl-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>I am  here to help</span>
              <h1 className='font-bold text-5xl'>Acquire more<br/>patients</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#f7cc0a"}/>
          </div>
      </div>
      
    </div>
  )
}

export default Choice