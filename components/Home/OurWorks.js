import Image from 'next/image'
import React from 'react'
import Frame1 from "../../public/Frame 64.png"
import Frame2 from "../../public/Frame 66.png"
import Frame3 from "../../public/Frame 73.png"
import Frame4 from "../../public/Frame 71.png"
import Frame5 from "../../public/Frame 67.png"
function OurWorks() {
  return (
    <div className='w-screen h-fit pt-5 text-center bg-bgBase'>
        {/* <span className='text-white'>A cross section client work delivered</span> */}
         <h1 className='text-white font-bold font-30 capitalize text-4xl py-10 pb-10'>Client <span className='text-mainGold'>Portfolio</span></h1>
        <div className='md:columns-4 columns-2 gap-3 mx-auto space-y-3 pb-10'>
          <div className='break-inside-avoid'>
            <Image src={Frame1} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame2} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame3} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame4} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame5} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame3} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame2} alt={"project"}/>
          </div>
          <div className='break-inside-avoid'>
            <Image src={Frame1} alt={"project"}/>
          </div>
        
        </div>
    </div>
  )
}

export default OurWorks