// import Image from 'next/image'
import React from 'react'
import Bg from "../../public/Frame 73bg.png"
import Button from '../button'

function Header({title, desc}) {
  return (
    <div className='relative w-screen'>
        <img src={Bg.src} alt="Background Image"/>
        <div className='absolute top-1/3 left-0 text-white text-center w-screen pt-0'>
            <h1 className='text-4xl font-bold pb-5'>{title}</h1>
            <p>{desc}</p>
            {/* <Button text={"see services"}/> */}
        </div>
    </div>
  )
}

export default Header