import React from "react";

function Button({ text, bg, bg2, className }) {
  return (
      <a
        style={{backgroundColor:`${bg?bg:"transparent"}`, border:`1px solid ${bg2}`, color:bg2?bg2:"#fff"}}
        href="#"
        className={`
        inline-block 
        text-sm 
        px-5 
        py-3 
        leading-none  
        rounded 
        text-white 
        border-white 
        hover:border-transparent 
        hover:text-white 
        hover:bg-white 
        mt-4 
        lg:mt-0 
        w-fit 
        ${className}
        
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700
        `}
      >
        {text}
      </a>
  );
}

export default Button;
