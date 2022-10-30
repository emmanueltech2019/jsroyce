import React from 'react'

function ServiceList() {
  return (
    <div className='bg-bgBase w-screen h-fit text-white text-center py-5'>
        <p>You win , we win</p>
        <h1 className='text-4xl'>Our services</h1>
        <span>We want the best for your buisness because thats the only way we can win</span>
        <div className='flex flex-col md:flex-row justify-around md:space-x-10 space-y-5 md:space-y-0 px-10 pt-12 md:py-12'>
            <div>
                <h1 className='text-2xl'>Buisness Development</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            <div>
                <h1 className='text-2xl'>Web Development</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            <div>
                <h1 className='text-2xl'>Seo Services</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            <div>
                <h1 className='text-2xl'>Digital  Marketing</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-around md:space-x-10 space-y-5 md:space-y-0 px-10 pb-12 pt-4 md:py-12'>
            <div>
                <h1 className='text-2xl'>Early Childhood Development</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            <div>
                <h1 className='text-2xl'>Team Building</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            <div>
                <h1 className='text-2xl'>Executive ProfessionalDevelopment</h1>
                <span className='text-gray-400'>We want the best</span>
            </div>
            
        </div>
    </div>
  )
}

export default ServiceList