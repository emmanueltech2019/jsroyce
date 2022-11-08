// import Image from 'next/image'
import React from 'react'
import Marketing from "../../public/marketing.jpeg"
import Brand from "../../public/brand.jpeg"
import Seo from "../../public/Seo.png"

import Button from '../button'

function Choice() {
  return (
    <div className='bg-white'>
        <div className='bg-white p-20 text-black text-center'>
            <p className='text-gray-400'>Whats in it for you</p>
            <h1 className='text-black font-bold font-30 capitalize text-4xl py-1'>WHy <span className='text-mainGold'>choose me</span></h1>
            {/* <h1 className='text-4xl font-bold text-bgBase'>Why </h1> */}
        </div>
        <div className='md:flex  text-black py-8 md:px-24 px-5 space-y-5 bg-mainSilver' >
          <div className='pr-10 flex flex-col space-y-5 w-full mt-10' >
              <span className='text-gray-500'>Let&apos;s generate new revenue</span>
              <h1 className='font-bold text-4xl text-bgBase'>Medical Marketing</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#f7cc0a"}/>
          </div>
        
          <div className='h-full w-full relative'>
              <img src={Marketing.src} alt={"image"} className="rounded"/>
          </div>
      </div>
      <div className='md:flex md:flex-row text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1 ' >
          <div className='h-full w-full relative'>
              <img src={Seo.src} alt={"image"} objectFit='cover' className="rounded"/>
          </div>
          <div className='pl-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>Let&apos;s showcase your medical practice</span>
              <h1 className='font-bold text-4xl text-bgBase'>Digital Strategy</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"More Details"} bg2={"#f7cc0a"}/>
          </div>
      </div>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1' >
          <div className='pr-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>Let&apos;s build your medical</span>
              <h1 className='font-bold text-4xl text-bgBase'>Brand identity</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#f7cc0a"}/>
          </div>
          <div className='h-full w-full relative'>
              <ing src={Brand.src} alt={"image"} className="rounded"/>
          </div>
      </div>
    </div>
  )
}

export default Choice