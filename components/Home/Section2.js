// import Image from 'next/image'
import React from 'react'
import Img from "../../public/Frame 86.png"
import Button from '../button'

function Section2() {
  return (
    <div className="">
        <div className='w-screen text-black text-center p-5 pt-10 flex flex-col space-y-1 border-b-bgBase border-2' style={{backgroundColor:"#fff"}}>
            <span className='text-gray-500'>Curious about who i am?</span>
            <h1 className='text-4xl font-bold pb-5 text-bgBase'>About Me</h1>
        </div>
        <div className='md:flex  text-white items-center ' style={{backgroundColor:"#ffffff"}}>
            <div className='h-full w-full relative'>
              <img src={Img.src} alt={"image"} className="rounded"/>
              <div className='w-fit h-fit bg-bgBase absolute md:top-40 p-2 md:-right-10 right-0 top-0 z-10'>
                <h1 className='text-5xl font-bold'>James</h1>
                <h1 className='text-5xl font-bold '>Royce</h1>
              </div>
          </div>
          <div className='pr-10 flex flex-col space-y-3 md:pl-20 pl-10 py-3 w-fit'>
              <h1 className='font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-t from-step1 via-step2 to-step2' >Hello!</h1>
              <p className='text-gray-500 pb-5'>My name is James Dominick. I am a Development Executive with specialty in medical marketing, digital strategy brand identity, growth partnerships, practice acquisitions, investments & holdings.</p>
              <p className='text-gray-500 pb-5'>I support startups, investors, tech, and medical practices with initiatives that would help them to achieve their vision for growth and expansion for over 30 years. Yea, that long!. The need and passion to see people’s businesses develop and flourish exceedingly drives me. Let me tell you a little about how that journey began.</p>
              <Button text={"Contact Me"} link="/contact" bg={"#f7cc0a"} className="px-20"/>
          </div>
        </div>
    </div>
  )
}

export default Section2