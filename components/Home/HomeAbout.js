import Image from 'next/image'
import React from 'react'
import img from  "../../public/profile.jpg"
function HomeAbout() {
  return (
    <div className='w-screen h-fit bg-bgGray pt-40 pb-40 px-36' >
        <div className='flex flex-row'>
            <div className='HomeAboutImg h-fit w-full' style={{width:"1000px"}}>
                <Image src={img}  alt="image" className='object-cover'/>
            </div>
            <div className='text-black '>
                <div className='pl-20'>
                    <span className='py-2'>Curious about who i am,</span>
                    <h2 className='py-3 text-3xl font-bold'>About Me</h2>
                    <p className='py-5'>My name is James Dominick, I am an accomplished Development Executive with over 30 years of multiple startups and 3 notable business successes.</p>
                    <button className='text-mainGold border-current mt-12 px-8 py-4 border rounded hover:bg-mainGold hover:text-white'>Book appointmenmt</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout