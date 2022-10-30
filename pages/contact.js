import Head from 'next/head'
import React from 'react'
import ContactInfo from '../components/Contact/ContactInfo'
import Map from '../components/Contact/Map'
import Footer from '../components/Home/Footer'
import Navbar from '../components/Home/Navbar'
import Layout from '../components/Layout'

function contact() {
  return (
    <Layout>
      <Map/>
      <ContactInfo/>
    </Layout>
  )
}

export default contact