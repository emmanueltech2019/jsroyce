// import Image from 'next/image'
import React from 'react'
import Img from "../../public/aquisition.jpeg"

function Section1() {
  return (
    <div className='' style={{backgroundColor:"#ebebeb"}}>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5' >
          <div className='pr-10 flex flex-col space-y-5'>
              <span className='text-gray-500'>Let&apos;s get you new patients</span>
              <h1 className='font-bold text-4xl text-bgBase'>Practice Acquisition </h1>
              <p className='text-gray-500 pb-5'>JD is one of the top rated marketing agency, focused on the growth of medical practices and startups, with the use of marketing techniques, SEO to pull web traffick and onboard new patients to your practice.</p>
          </div>
          <div className='h-full w-full relative'>
              <img src={Img.src} alt={"image"} className="rounded"/>
          </div>
      </div>
      {/* <iframe className='pt-5' width="100%" height="500" src="https://www.youtube.com/embed/vo1NyNB9rN8?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
    </div>
  )
}

export default Section1