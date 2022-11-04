import Image from 'next/image'
import React from 'react'
// import NameCircle from "../public/NameCircle.png"
function Loader() {
  return (
    <div className='w-screen h-screen m-auto block text-center content-center z-50 fixed top-0 left-0 bg-white pt-40'>
        {/* <Image src={NameCircle} alt="" className='mt-40 rotate'/> */}
    </div>  
  )
}

export default Loader