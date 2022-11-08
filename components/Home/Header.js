// import Image from 'next/image'
import React from 'react'
import Img from "../../public/guy.png"
// <>172D41
function Header() {
  return (
    <>
        <div className='w-screen md:h-screen  h-fit  relative  md:text-left md:text-center text-left  md:flex'>
            <div className='text-left md:text-left md:py-32 py-20 p-5 md:bg-mainSilver bg-bgBase text-mainSilver md:text-bgBase md:pt-40 md:px-20'>
                <h1 className='md:text-3xl text-1xl font-bold leading-lose md:text-bgBase text-mainSilver pb-0 leading-10 uppercase'>I Invest in People, businesses<br/><p className='text-4xl'>& build brands.</p></h1>
                <h1 className='text-3xl font-bold pt-0 text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step1'>JAMES D ROYCE</h1>
                {/* <p className='w-fit pt-5 leading-lose md:text-left md:text-left text-center capitalize leading-6'>I am a development executive with specialties <br/>in digital strategy; medical<br/> marketing; practice acquisitions, growth partnerships;<br/> investments & holdings..</p> */}
                <div className='flex space-x-10 pt-24'>
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4'>
                        <h1 className='md:text-2xl text-1xl font-bold'>SOLLOH</h1>
                        <span>FOUNDER</span>
                        <ul className='text-bgBase uppercase md:list-disc list-none text-sm pt-2 text-mainGold flex flex-col space-y-2'>
                           <li><p className='md:text-bgBase text-white'>medical marketing</p></li>
                           <li><p className='md:text-bgBase text-white'>digital strategy</p></li>
                           <li><p className='md:text-bgBase text-white'>brand identity</p></li>
                        </ul>
                    </div>
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4 uppercase'>
                        <h1 className='md:text-2xl text-1xl font-bold'>ROYCE - ROYCE</h1>
                        <span>CO-FOUNDER</span>
                        <ul className='text-bgBase md:list-disc list-none text-sm pt-2 text-mainGold flex flex-col space-y-2'>
                           <li><p className='md:text-bgBase text-white'>Growth Partnerships</p></li>
                           <li><p className='md:text-bgBase text-white'>Practice Acquisitions</p></li>
                           <li><p className='md:text-bgBase text-white'>investments  & holdings</p></li>
                           
                        </ul>
                        
                    </div>
                </div>
                <div className='md:pt-10 pt-5 flex flex-col space-y-5 md:block'>
                    <button className='bg-transparent border-amber-400 border-2 px-20 p-3 rounded text-white text-1xl mr-5 md:text-bgBase  '>My CV</button>
                    <button className=' bg-gradient-to-r from-step1 via-step2 to-step4 p-3 px-8 mb-5 md:mb-0 rounded text-bgBase text-1xl mr-5'>Book appointmenmt</button>
                </div>
            </div>
            <div className='absolute right-0 bottom-0 hidden md:block'>
                {/* <p className='absolute w-10 z-10 top-10'>Hi     there! Im Finge, founder of ConversionLab </p> */}
                <img src={Img.src} alt=""/>
            </div>
        
            {/* <div className='absolute md:p-0 px-4 top-40 left-0  text-center w-full'>
                <h1 className='text-white font-bold font-30 capitalize text-6xl'>we care about your <span className='text-mainGold'>Growth</span></h1>
                <div className='md:flex md:flex-row md:justify-around md:px-40 md:text-center tracking-wideest text-center pt-5 text-xl uppercase'>
                    <p className='md:flex text-center py-4'>business development
                        <div className='w-4 h-4 m-2 bg-mainGold rounded-full md:flex hidden'></div>
                    </p>
                    <p className='md:flex text-center py-4'>business development
                        <div className='w-4 h-4 m-2 bg-mainGold rounded-full md:flex hidden'></div>
                    </p>
                    <p className='md:flex text-center py-4'>business development
                        <div className='w-4 h-4 m-2 bg-mainGold rounded-full md:flex hidden'></div>
                    </p>
                </div>
                <div className='md:pt-60 pt-36'>
                    <button className='bg-mainGold p-3 mb-5 md:mb-0 rounded text-white text-2xl mr-5'>Book appointmenmt</button>
                    <button className='bg-transparent border-amber-400 border-2 px-20 p-3 rounded text-white text-2xl mr-5'>My CV</button>
                </div>
            </div> */}
        </div>
        
    </>
  )
}
// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

export default Header