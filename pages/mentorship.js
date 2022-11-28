import { Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import CVCTA from "../components/Home/CVCTA";
import Layout from "../components/Layout";
import Header from "../components/Services/Header";

function Mentorship() {
  return (
    <Layout>
      <Header title="Mentorship" desc={`"If you cannot see where you are going, ask someone who has been there before." — J Loren Norris.”`}/>
      <div className="w-screen h-fit py-20 px-5">
          <div>
            <Paper elevation={3} className="p-20">
            {/* <h3 className="text-2xl">"If you cannot see where you are going, ask someone who has been there before." — J Loren Norris.”</h3> */}
              <p className="pb-3">
              Whether you are building your medical business or your brand is established but it is experiencing growth obstacles, with my mentorship program, we will create a plan for geometric growth and profitability.
              </p>
               <p className="pb-3">
               As your mentor, I will empower you with guidance and support to achieve your greatest potential and meet your practice vision resulting in explosive, exponential growth of your medical practice.
              </p>
              <p className="pb-3">
              Which aspect of life needs mentoring the most? I’d say ALL. Business, health, and life. Leverage on our mentorship program to become the greatest version of yourself. 
              </p>


              <h3 className="text-3xl">Business Mentorship:Grow Your Business and Drive True Business Result</h3>
              <p className="pb-3">
              Leveraging an experienced business development mentor like me is your ultimate tool to achieve true business results. Most of the successful medical practices and entrepreneurs consult a business mentor to produce acquisitions and increase profitability, by creating revenue, growth & expansion initiatives and building strategic partnerships.
              </p>

               <h3 className="text-2xl"> Life Mentorship: Attain Your Greatest Potential</h3>
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
              <p>Schedule your free 30-minute consultation to start achieving your goals.</p>
            </Paper>
          </div>

      </div>
      <CVCTA />
    </Layout>
  );
}

export default Mentorship;
