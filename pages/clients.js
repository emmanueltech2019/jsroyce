import { Paper } from '@mui/material'
import React from 'react'
import Button from '../components/button'
import CVCTA from '../components/Home/CVCTA'
import Header from '../components/Services/Header'
import Layout from '../components/Layout'

function clients() {
  return (
    <Layout>
    <Header title="Professional Clients" desc={`"If you cannot see where you are going, ask someone who has been there before." — J Loren Norris.”`}/>
    <div className="w-screen h-fit py-20 px-5">
        <div>
          <Paper elevation={3} className="p-20">
          <h3 className="text-3xl font-bold">Professional Relationships: Growth Partnership  and Profitable Opportunities</h3>
            <p className="pb-3">
            My relationship with my clients is symbolic to me. Each of my clients is KING. I aim to be your growth partner as we journey towards building a successful world-class business. My purpose is to support your brand vision to achieve maximum brand growth.
            </p>
             <p className="pb-3">
             To build that lucrative brand with you, I conduct an in-depth analysis of your business to ascertain the best marketing strategies suitable for the growth we seek. Through that research and analysis, I will develop the most suited SEO campaign, competitor analysis, and of course, analysis and projections to boost sales, inbound leads, and patient acquisition.
            </p>
           

            <h3 className="text-2xl font-bold">Client Acquisition: Successful Entrepreneurial Journey</h3>
            <p className="pb-3">
            Professional clients who have handled their growth strategies understand the need to build and reform businesses to reflect the current status quo and grow their business. I am proud to have worked with these powerful companies to achieve their brand goals. They trust me with their growth processes and internal operations.
            </p>
            <p className="pb-3">Here is a list of some of the professional clients that I have worked with where I recorded enormous campaign successes in SEO campaigns, Brand audience and content campaigns, Google Adword, competitor analysis, and patient acquisition,  -</p>

            <ul className="list-disc">
                <li>NorthStar Surgery</li>
                <li>Dr. Choudhry</li>
                <li>SOLLOH</li>
            </ul>

            <p className="pb-3">I have achieved hot lead generation, market analysis, inbound acquisitions, and development planning for many entrepreneurs, including - </p>
            <ul className="list-disc">
                <li>Worthy Industries</li>
                <li>Royce-Royce</li>
                <li>Riverfront</li>
                <li>J&J Estates</li>
            </ul>
            <p className='pb-3'>My role and responsibility is  to help you achieve success and grow your business.</p>



             <h3 className="text-2xl font-bold"> Life Mentorship: Attain Your Greatest Potential</h3>
            <p className="pb-3">
            James Life Mentorship gives you the essential ingredients to realize your optimum potential. Complete access to his bank of wisdom, moxie, and experience will equip you to flourish and soar higher. This mentorship will target the essence of your being, which in turn will positively impact all other aspects of your life. We will work with the GRIT principle of - 
            </p>
            <ul className="list-disc">
              <li>Gratitude</li>
              <li>Resilience</li>
              <li>Integrity</li>
              <li>Tenacity</li>
            </ul>

            <h3 className="text-1xl font-bold"> Life Mentorship: Attain Your Greatest Potential</h3>
            <ul className="list-disc">
              <li>Learn how to build and exceed all your expectations </li>
              <li>Goal setting that will equip you to define and set SMART goals.</li>
              <li>Accountable Growth partner</li>
              <li>Self-awareness, unwavering self-confidence, and increased self-efficacy </li>
              <li>Build a robust and bonhomous relationship </li>
            </ul>

            <h3 className="text-1xl font-bold"> Health Mentorship: Unravel the Holistic Approach to Healthy Living</h3>
            <p className="pb-3">
            You need to be the epitome of good health to flourish in everything else and find balance. An accomplished health mentor will help you find that balance.
            </p>
            <p className="pb-3">A sharp-witted health mentor is concerned about your overall health and wellness - physical, mental, and otherwise. James will assist you in achieving your general life goals by ensuring that you are physically and mentally fit. </p>
            <h3 className="font-bold 1xl py-8">In what ways can your health mentor assist you? </h3>
            <p className="pb-3">A competent health mentor is a professional who specializes in health and wellness. He will guide you towards -</p>
            <ul className="list-disc">
              <li>Attaining your health goals,</li>
              <li>Managing health challenges</li>
              <li>Identifying areas of health improvement</li>
              <li>Healthy nutrition</li>
              <li>Habitual healthy exercise</li>
              <li>Managing sleep</li>
              <li>Managing stress</li>
              <li>identifying and changing unproductive </li>
            </ul>
            <h3 className="font-bold 1xl py-8">How does this mentorship with James work? </h3>
            <p className="pb-3">In a highly productive 1:1 mentorship with me, James, you will receive game-changing guidance spanning 20-60 interactive sessions with a vision development plan that will see your business achieve exponential success. I continually undergo diverse mentorship programs to remain relevant and savvy. Add these to the expertise I have garnered, you will tap from the wealth of my profound experience of over 30 years in delivering business growth in diverse startups, fashion, tech, and medical industries</p>
            <p className="pb-3">To fully benefit from this program, we will create a pragmatic course of action that will include precise business goals with practical steps toward achieving them. We will work in tandem to dislocate every limitation and inhibition on your path to success. </p>
            <p className="pb-3">Working with a talented business coach is your first step toward geometric growth and profitability.</p>
            <p className="pb-3">Schedule your free 30-minute consultation to start achieving your goals.</p>
            <Button text={"Book an Appointment Now"} bg={"#E9B806"}/>
          </Paper>
        </div>

    </div>
    <CVCTA />
  </Layout>
  )
}

export default clients