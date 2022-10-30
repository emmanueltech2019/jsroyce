import Image from 'next/image'
import React from 'react'
import Img from "../../public/guy.png"
// <>172D41
function Header() {
  return (
    <>
        <div className='w-screen md:h-screen  h-fit  relative  md:text-left text-center  md:flex'>
            <div className='text-center md:text-left py-20 p-5 md:bg-mainSilver bg-bgBase text-bgBase md:pt-40 pt-5 md:px-20'>
                <h1 className='md:text-6xl text-4xl leading-lose text-mainBlue'>Building digital<br/>brands, products<br/>& experiences</h1>
                <p className='w-fit pt-5 leading-lose md:text-left text-center capitalize'>a buisness developer and marketing expert<br/>specialized in marketing strategy, content <br/>managemnet sysytems, seo and Google <br/>analytics.</p>
                <div className='md:pt-10 pt-5 flex flex-col space-y-5 md:block'>
                    <button className='bg-transparent border-amber-400 border-2 px-20 p-3 rounded text-white text-1xl mr-5 text-mainGold'>My CV</button>
                    <button className='bg-mainGold p-3 px-8 mb-5 md:mb-0 rounded text-white text-1xl mr-5'>Book appointmenmt</button>
                </div>
            </div>
            <div className='absolute right-0 bottom-0 hidden md:block'>
                {/* <p className='absolute w-10 z-10 top-10'>Hi     there! Im Finge, founder of ConversionLab </p> */}
                <Image src={Img} alt=""/>
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

export default Header