import React from 'react'
import Button from '../button'

function CVCTA() {
  return (
    <div className='bg-mainSilver w-full h-fit p-20 text-bgBase text-center '>
      <p className='pb-5'>Need to scale your practice?</p>
      <h1 className='pb-5 text-4xl font-bold'>I would love to help</h1>
      <Button text={"Book An Appointment"} bg={"#f7cc0a"}/>
        {/* <button className='bg-darkBlack text-white rounded text-xl px-20 py-2'>Book An App</button> */}
    </div>
  )
}

export default CVCTA