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
            <h1 className='text-black font-bold font-30 capitalize text-4xl py-1'>Why <span className='text-mainGold'>choose me</span></h1>
            {/* <h1 className='text-4xl font-bold text-bgBase'>Why </h1> */}
        </div>
        <div className='md:flex  text-black py-8 md:px-24 px-5 space-y-5 bg-mainSilver' >
          <div className='pr-10 flex flex-col space-y-5 w-full mt-10 w-fit' >
              <span className='text-gray-500'>Let&apos;s generate new revenue</span>
              <h1 className='font-bold text-4xl text-bgBase'>Medical Marketing</h1>
              <p className='text-gray-500 pb-5'>The internet provides unimaginable opportunities for medical brands that choose to leverage its powers . Recent research proves that  5 billion people use the internet every day. Your surgical skills, propriety, achievements, professional experiences, values, competencies, and recommendations are your brand and should be on the internet.</p>
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
          <div className='pl-10 flex flex-col space-y-5 w-fit'>
              <span className='text-gray-500'>Let&apos;s showcase your medical practice</span>
              <h1 className='font-bold text-4xl text-bgBase'>Digital Strategy</h1>
               <p className='text-gray-500 pb-5'>Research finding proves that 5 billion people use the internet everyday.  As a surgeon, it’s important to take advantage of the digital world with an online brand reputation, by building a medical  brand, providing a valuable experience that leads to new patient acquisition and revenue also brings more potential customers and more, with our digital strategy.</p>
              <p className='text-gray-500 pb-5'>Digital marketing strategy allows you to leverage different digital channels–such as social media platforms, pay-per-click,V360 video and voice package,  search engine optimization, and email marketing to connect with existing and potential patients  interested in surgical expertise.</p>
              <Button text={"More Details"} bg2={"#f7cc0a"}/>
          </div>
      </div>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1' >
          <div className='pr-10 flex flex-col space-y-5 w-fit' >
              <span className='text-gray-500'>Let&apos;s build your medical</span>
              <h1 className='font-bold text-4xl text-bgBase'>Brand identity</h1>
              <p className='text-gray-500 pb-5'>Your brand identity should be one that is unique, easily identifiable and powerful enough to make an impact on the decisions of your target patients. If a patient is looking for the best surgeon for minimally invasive mastectomy, for instance, will your name be top on the list either via referral, reviews or search engine results?.</p>
              <p className='text-gray-500 pb-5'>Brand reputation is a pointer to the quality of goodwill and trust your brand enjoys from its public. Before arriving at their decisions, potential patients and customers will weigh your brand’s reputation and other factors such as accessibility and camaraderie.</p>
              <p className='text-gray-500 pb-5'>As an experienced business development executive with specialty growth partnership, new patient acquisition, medical marketing, and brand identity, I support   medical practices to attain tremendous growth in their medical practice by applying potent branding principles and strategies that will guarantee accurate brand positioning, increase patients awareness and loyalty, and  revenue generation</p>
              <Button text={"lets have a chat"} bg2={"#f7cc0a"}/>
          </div>
          <div className='h-full w-full relative'>
              <img src={Brand.src} alt={"image"} className="rounded"/>
          </div>
      </div>
    </div>
  )
}

export default Choice