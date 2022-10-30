import React, {useState} from 'react'
import Collapsible from 'react-collapsible';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
function HomeCV() {
    const [active, setActive] = useState("")
    const data =[
        {
            title:"Education",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:true
        },
        {
            title:"Expertise",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Skill",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Works",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        {
            title:"Award & Recognistion",
            page:"This is the collapsible content. It can be any element or React component you like.",
            active:false
        },
        
    ]

    const switchState =(title)=>{
        let exactitem = data.filter((item)=>{
            return item.title==title
        })
        
    }
    const ReturnList = ({title}) =>{
        return (
           <h1>{title}</h1>
        )
    }
  return (
    <div className='h-fit md:p-24 p-5 w-screen' style={{backgroundColor:"#102235"}}>
        {data.map((item, index)=>(
            <Accordion key={index} expanded={index==0?true:false} className={"bg-transparent text-white border-white border-t drop-shadow-none"}>
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