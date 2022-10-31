import Image from 'next/image'
import React from 'react'
import Logo from "../../public/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';


function Footer() {
  return (
    <div className='bg-darkestGold w-screen h-fit text-white container px-16 py-10' style={{backgroundColor:"#102235"}}>
        <Image src={Logo} alt="" width={"100"} height={"60"}/>
        <div className='md:flex md:space-x-40'>
            <div className='pr-0'>
                <p>JD team of professionals who provide innovative, marketing for medical outfits and start ups across the country to grow their business.</p>
            </div>
            <div>
                <h1 className='text-3xl py-4'>Company</h1>
                <ul className='list-none flex flex-col space-y-3 text-sm'>
                    <li><Link href="/">About Me</Link> </li>
                    <li><Link href="/services">Services</Link> </li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl py-4'>More</h1>
                <ul className='list-none flex flex-col space-y-3 text-sm'>
                    <li><Link href="/contact">Contact</Link></li>                    
                </ul>
            </div>
            <div className='w-40'>
                <h1 className='text-3xl py-4'>Contact</h1>
                <ul className='list-none flex flex-col space-y-3 text-sm'>
                    <li className="flex"><span className='pr-5'>Email </span><span> jd@gmail.com</span></li>
                    <li className="flex"><span className='pr-5'>Address</span><span>jdafressssssssss</span></li>
                    <li className="flex"> <span className='pr-5'>Phone</span><span>+233980547654</span></li>
                </ul>
            </div>
           
        </div>
        <div className='flex justify-end text-3xl space-x-4 p-6'>
            <TwitterIcon fontSize='large'/>
            <FacebookIcon fontSize='large'/>
            <LinkedInIcon fontSize='large'/>
            <YouTubeIcon fontSize='large'/>
        </div>
    </div>
  )
}

export default Footer