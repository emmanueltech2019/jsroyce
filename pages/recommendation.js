import { Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import CVCTA from "../components/Home/CVCTA";
import Layout from "../components/Layout";
import Header from "../components/Services/Header";

function recommendation() {
  return (
    <Layout>
      <Header title="Recommendations" desc="Here are some of my client’s reviews and recommendations."/>
      <div className="w-screen h-fit py-20 px-5">
        <div className="md:columns-2 columns-1 gap-3 mx-auto space-y-3 pb-10">
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>I met JD years ago and after our first development
                consult, I knew his proposed initiatives would help us achieve
                the vision for growth & expansion. James and the SOLLOH team are
                responsible for our brand identity, marketing and reputation.
                They have done an amazing job for me over the years!! He has
                produced tremendously for us, with business development and new
                patient acquisitions<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/drvineetchoudhry/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Dr. Vineet Choudhry</b>{" "}
              </a>
              <h4>Surgeon and owner of NorthStar Surgery</h4>
            </Paper>
          </div>
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>I have worked with James Dominick enough times to know
                that he has that Midas touch for marketing that only a handful
                of people possess. Clearly, he knows his trade. He will take
                your business to the next level if you allow him. That I can say
                with confidence<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/nil-buan-a4b9372"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Nil Buan</b>{" "}
              </a>
              <h4>Owner, Nil Buan Videography</h4>
            </Paper>
          </div>
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>JD has been a true inspiration to me and a lot of people around him. I have see him motivate and inspire his team all the time. He closely works with his clients listening to their needs and making sure they are all met. Always laser focused and thinking out of the box with amazing ideas. A great entrepreneur, mentor and a true friend!<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/jeevak-ingle"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Jeevak Ingle</b>{" "}
              </a>
              <h4>System Engineering Manager | Building resilient and scalable Infrastructures</h4>
            </Paper>
          </div>
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>JD has been a huge asset to our company with all our marketing needs. His quick response time is beyond words and his professionalism and enthusiasm has personally inspired me. Extremely genuine and caring about our business needs and not to mention checking in on a personal level to see how my family is doing. Great guy and so very fortunate to have him as a partner in our business. Thanks for being such an honest and motivating person!<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/jrattan"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Jessica Rattan</b>{" "}
              </a>
              <h4>ODirector of Marketing Communications at The Body Shop Collision Repair - TX -</h4>
            </Paper>
          </div>
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>Very few individuals have the tenacity, the work ethic, the networking skills, and above all the vision to seek and seize opportunities as JD does. He unknowingly mentors individuals to become tenacious entrepreneurs themselves without them realizing where they are headed. In my brief time working with JD I learned a lot about becoming a go-getter and how to master my networking skills to my professional and personal advantage. I am glad we have remained friends over the years and can&apos;t wait to work on projects together in the future. Every now and then we catch up, and I always leave our conversations with a new lesson or idea for the future. I highly recommend JD to anyone who needs a real voice guiding them through the next step<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/kirtanabanskota"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Kirtana Banskota</b>{" "}
              </a>
              <h4>Producer | Board Member at Women In Film & Television Austin</h4>
            </Paper>
          </div>
          <div  xs={6} className="break-inside-avoid">
            <Paper elevation={3} className="p-5">
              <p className="pb-5">
                <b>&quot;</b>Phenomenal ability to take on whatever the situation asks for, listens to requests and provides great options for alternative ways to accomplish the goals of a marketing campaign. Very responsive and proactive as well. Looking forward to working with him and his team again<b>&quot;</b>
              </p>
              <a
                href="https://www.linkedin.com/in/berendzen"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>Cory Berendzen</b>{" "}
              </a>
              <h4>Digital Colorist</h4>
            </Paper>
          </div>
        </div>
      </div>
      <CVCTA />
    </Layout>
  );
}

export default recommendation;
