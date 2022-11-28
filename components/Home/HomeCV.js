import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '../button';

function HomeCV() {
    const data =[
        {
            title:"Expertise & Skills",
            page:"I Create Revenue, Growth & Expansion Initiatives, By Producing Acquisitions, Building Strategic Partnerships To Increase Profitability And To Demonstrate True Business Results.",
            page2:"",
            active:true,
            button:{
                text:"More details",
                link:"/skills",
                class:"mt-5"
            }
        },
        {
            title:"Mentorship",
            page:"Whether you are building your medical business or your brand is established but it is experiencing growth obstacles, with my mentorship program, we will create a plan for geometric growth and profitability.",
            page2:"",
            active:false,
            button:{
                text:"more details",
                link:"/mentorship",
                class:"mt-5"
            }
        },
        // {
        //     title:"Development",
        //     page:"This is the collapsible content. It can be any element or React component you like.",
        //     page2:"",
        //     active:false,
        //     button:{
        //         text:"view recommendation",
        //         link:"/recommendation",
        //         class:"mt-5"
        //     }
        // },
        {
            title:"Professional Clients",
            page:"Do you know what your business needs for its growth at this point? We can figure it out together, and I can take up the successful digital campaign of your brand from there.",
            page2:"My relationship with my clients is symbolic to me. Each of my clients is KING. I aim to be your growth partner as we journey towards building a successful world-class business. My purpose is to support your brand vision to achieve maximum brand growth.",
            active:false,
            button:{
                text:"More details",
                link:"/clients",
                class:"mt-5"
            }
        },
        {
            title:"Recommendation",
            page:`I believe in helping my clients to  grow their business, by providing strategic & innovative brand audience and content  campaigns to produce acquisitions and increase revenue. `,
            page2:"Here are some of my client’s reviews and recommendations.",
            active:false,
            button:{
                text:"view recommendation",
                link:"/recommendation",
                class:"mt-5"
            }
        },
        
    ]
  return (
    <div className='h-fit md:p-24 p-5 w-screen' style={{backgroundColor:"#102235"}}>
        {data.map((item, index)=>(
            <Accordion key={index} className={"bg-transparent text-white border-white border-t drop-shadow-none"}>
            <AccordionSummary
                expandIcon={<AddIcon  className='text-white'/>}
                className={"drop-shadow-none"}
                
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography className="font-bold">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="pb-5">
                {item.page}
                </Typography>
                <Typography>
                {item.page2}
                </Typography>
            <Button text={item.button.text} className={`${item.button.class}`} link={item.button.link}/>
            </AccordionDetails>
            </Accordion>
        ))}
    </div>
  )
}

export default HomeCV