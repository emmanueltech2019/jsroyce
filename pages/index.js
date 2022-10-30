import Head from 'next/head'
import CVCTA from '../components/Home/CVCTA'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import HomeAbout from '../components/Home/HomeAbout'
import HomeCV from '../components/Home/HomeCV'
import Navbar from '../components/Home/Navbar'
import OurWorks from '../components/Home/OurWorks'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'

import Stats from '../components/Home/Stats'
import WhatWeDo from '../components/Home/WhatWeDo'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Header/>
      <Stats/>
      <Section1/>
      <Section2/>
      <HomeCV/>
      <Section3/>
      <OurWorks/>
      <CVCTA/> 
    </Layout>
  )
}
