// import Image from 'next/image'
import React from 'react'
import Img from "../../public/aquisition.jpeg"

function Section1() {
  return (
    <div className='' style={{backgroundColor:"#ebebeb"}}>
      <div className='md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5' >
          <div className='pr-10 flex flex-col space-y-5 w-fit'>
              <span className='text-gray-500'>Let&apos;s get you new patients</span>
              <h1 className='font-bold text-4xl text-bgBase'>Practice Acquisition </h1>
              <p className='text-gray-500 pb-5'>The strategies of patient acquisition have achieved 360 evolution over the years, and recently  the major focus is to ensure that your practice has a strong brand reputation and identity.</p>
              <p className='text-gray-500 pb-5'>Our intention is to help you increase new patient acquisition  through our doctor to doctor referral program, referral partnership,  online reviews, consistent and valuable  online reputation management, and targeted community outreach. Learn all there is to know about patient acquisition, including common pitfalls, strategies for success, and the best solutions to grow your medical practice.</p>

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