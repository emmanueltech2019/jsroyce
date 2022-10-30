import React from 'react'

function Stats() {
  return (
    <div className='bg-white w-screen h-fit md:h-0 md:px-32 md:py-28 md:pb-40 '>
        <div className='flex md:flex-row flex-col justify-between text-center'>
            <div className='md:my-0 my-10'>
                <p className='text-darkBlack text-5xl text-bold'>23</p>
                <p className="text-lightGray text-2xl">Google Awards</p>
            </div>
            <div className='md:my-0 my-10'>
                <p className='text-darkBlack text-5xl text-bold'>11 years</p>
                <p className="text-lightGray text-2xl">SEO experrience</p>
            </div>
            <div className='md:my-0 my-10'>
                <p className='text-darkBlack text-5xl text-bold'>30 Years</p>
                <p className="text-lightGray text-2xl">Startup development </p>
            </div>
        </div>
    </div>
  )
}

export default Stats