import React from 'react'
import Head from "next/head";
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';



function Layout(props) {
  return (
    <div className='scroll-smooth'>
     <Head>
            <title>{props.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            
      </Head>
      <Navbar/>
      {
        props.children
      }
      <Footer/>
    </div>
  )
}

export default Layout