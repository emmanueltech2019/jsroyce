import Image from 'next/image'
import React from 'react'
import Img from "../../public/Rectangle 2 (6).png"
import HappyP from "../../public/happyPatient.png"
import MobileD from "../../public/MobileDevelopment.png"
import Seo from "../../public/Seo.png"

import Button from '../button'

function Choice() {
  return (
    <div className='bg-white'>
        <div className='bg-white p-20 text-black text-center'>
            <p className='text-gray-400'>Whats in it for you</p>
            <h1 className='text-4xl font-bold text-bgBase'>Why choose us</h1>
        </div>
        <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver' >
          <div className='pr-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>I am  here to help</span>
              <h1 className='font-bold text-4xl text-bgBase'>Acquire more<br/>patients</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#C19023"}/>
          </div>
          <div className='h-full w-full relative'>
              <Image src={HappyP} alt={"image"} className="rounded"/>
          </div>
      </div>
      <div className='md:flex md:flex-row text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1 ' >
          <div className='h-full w-full relative'>
              <Image src={Seo} alt={"image"} objectFit='cover' className="rounded"/>
          </div>
          <div className='pl-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>Increase your</span>
              <h1 className='font-bold text-4xl text-bgBase'>Search Engine Optimization</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#C19023"}/>
          </div>
      </div>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1' >
          <div className='pr-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>I am  here to help</span>
              <h1 className='font-bold text-4xl text-bgBase'>Digital Marketing & Web Development</h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
              <Button text={"lets have a chat"} bg2={"#C19023"}/>
          </div>
          <div className='h-full w-full relative'>
              <Image src={MobileD} alt={"image"} className="rounded"/>
          </div>
      </div>
    </div>
  )
}

export default Choice