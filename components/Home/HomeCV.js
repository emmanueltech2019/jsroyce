import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

function HomeCV() {
    const data =[
        {
            title:"Experience",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:true
        },
        {
            title:"Skills",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Mentorship",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Development",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Clients",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Recommendation",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
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
            <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
               {item.page}
            </Typography>
            </AccordionDetails>
            </Accordion>

        ))}
     
      
    </div>
  )
}

export default HomeCV