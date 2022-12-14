import React from 'react'
import Button from '../button'

function Plans() {
  return (
    <div className='w-screen height-fit bg-bgBase text-center py-10'>
        {/* <span>Pricing Plans</span> */}
        <h1 className='text-mainGold font-bold font-30 capitalize text-4xl py-5 pb-10 '>Flexible <span className='text-white'> Plans that suits
    your Buisness needs.</span></h1>

    <div className='flex md:flex-row flex-col md:justify-around pl-14 md:px-20'>
        <div className='h-fit w-72 rounded-lg text-bgBase text-left p-8 my-5 bg-white text-bgBase shadow-md shadow-mainSilver'>
            <h1 className='text-3xl pb-3'>Lite</h1>
            <p className='pb-3'>Get started</p>
            <div className='py-5'>
                <Button text={"Get started"} className="px-16 py-4" bg2={"#f7cc0a"}/>
            </div>
            <h1 className='text-3xl pb-3'>$5000</h1>
            <p className='pb-3'>(Per Buisness per month)</p>
            <ul className='list-disc'>
                <li>Seo</li>
                <li>Busines scaling</li>
                <li>Executive scaling</li>
                <li>Google Marketing</li>
            </ul>
        </div>
        <div className='h-fit w-72 rounded-lg text-bgBase text-left p-8 my-5 bg-white text-bgBase shadow-md shadow-mainSilver'>
            <h1 className='text-3xl pb-3'>Basic</h1>
            <p className='pb-3'>Get started</p>
            <div className='py-5'>
                <Button text={"Get started"} className="px-16 py-4" bg={"#f7cc0a"}/>
            </div>
            <h1 className='text-3xl pb-3'>$1000</h1>
            <p className='pb-3'>(Per Buisness per month)</p>
            <ul className='list-disc'>
                <li>Seo</li>
                <li>Busines scaling</li>
                <li>Executive scaling</li>
                <li>Google Marketing</li>
            </ul>
        </div>
        <div className='h-fit w-72 rounded-lg text-bgBase text-left p-8 my-5 bg-white text-bgBase shadow-md shadow-mainSilver'>
            <h1 className='text-3xl pb-3'>Plus</h1>
            <p className='pb-3'>Get started</p>
            <div className='py-5'>
                <Button text={"Get started"} className="px-16 py-4" bg2={"#f7cc0a"}/>
            </div>
            <h1 className='text-3xl pb-3'>$12000</h1>
            <p className='pb-3'>(Per Buisness per month)</p>
            <ul className='list-disc'>
                <li>Seo</li>
                <li>Busines scaling</li>
                <li>Executive scaling</li>
                <li>Google Marketing</li>
            </ul>
        </div>
    </div>
    <div className='py-10'>
        <Button text={"Download As PDF"} className="py-5 px-16 mt-10" bg={"#f7cc0a"}/>
    </div>

    </div>
  )
}

export default Plans