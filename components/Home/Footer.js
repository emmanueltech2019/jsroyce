import Image from 'next/image'
import React from 'react'
import Logo from "../../public/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer() {
  return (
    <>
        <div className='bg-darkestGold w-screen h-fit text-white container md:px-16 px-10 py-10' style={{backgroundColor:"#102235"}}>
            <div className='md:flex md:space-x-40 space-y-5'>
            <div>
            <Image src={Logo} alt="" width={"100"} height={"60"}/>

                <div className='pr-0'>
                    <p>JD team of professionals who provide innovative, marketing for medical outfits and start ups across the country to grow their business.</p>
                </div>
            </div>
                <div>
                    {/* <h1 className='text-3xl py-4'>Company</h1> */}
                    <ul className='list-none flex flex-col md:space-y-3 space-y-5 text-sm'>
                        <li><Link href="/services">Medical Marketing</Link> </li>
                        <li><Link href="/services">Digital Startegy</Link> </li>
                        <li><Link href="/services">Brand Identity</Link> </li>
                    </ul>
                </div>
                <div>
                    {/* <h1 className='text-3xl py-4'>More</h1> */}
                    <ul className='list-none flex flex-col md:space-y-3 space-y-5 text-sm'>
                        <li><Link href="/contact">Growth Partnership</Link></li>
                        <li><Link href="/contact">Practice Aquisation</Link></li>                    
                        <li><Link href="/contact">Investment & Holdings.</Link></li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-2xl py-4'>Contact</h1>
                    <ul className='list-none flex flex-col md:space-y-3 space-y-5 text-sm'>
                        <li className="flex"><span className='pr-5'>Email </span><span> jd@gmail.com</span></li>
                        <li className="flex"><span className='pr-5'>Address</span><span>jdafressssssssss</span></li>
                        <li className="flex"> <span className='pr-5'>Phone</span><span>+1 512.945.5195</span></li>
                    </ul>
                </div>
            
            </div>
            <div className='flex justify-end text-3xl space-x-4 p-8'>
                <TwitterIcon fontSize='large'/>
                <FacebookIcon fontSize='large'/>
                <LinkedInIcon fontSize='large'/>
                <YouTubeIcon fontSize='large'/>
            </div>
        </div>
        <div className='bg-gradient-to-r 
        from-step1
        via-step2
        to-step4
        from-step4 h-2 w-screen'>

        </div>
        <div className='bg-bgBase h-fit text-white w-screen flex md:flex-row flex-col justify-between p-5 md:space-y-0 space-y-5'>
            <p>© Copyright James D Royce 2022. All Right Reserved.</p>
            <p>Made with <FavoriteBorderIcon color='red'/> by <a href='www.devemmy.tech' target="_blank">Devemmy</a></p>
        </div>
    </>
  )
}

export default Footer