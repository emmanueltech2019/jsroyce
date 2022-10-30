import React from 'react'
import CVCTA from '../components/Home/CVCTA'
import Choice from '../components/Services/Choice'
import Header from '../components/Services/Header'
import ServiceList from '../components/Services/ServiceList'
import CaseStudy from "../components/Services/CaseStudy"
import Plans from '../components/Services/Plans'
import Clients from '../components/Services/Clients'
import Layout from '../components/Layout'
function services() {
  return (
    <>
        <Layout>
          <Header/>
          <ServiceList/>
          <Choice/>
          <Plans/>  
          {/* <Clients/> */}
          {/* <CaseStudy/> */}
          <CVCTA/>
      </Layout>
    </>
  )
}

export default services