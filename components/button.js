import React from "react";

function Button({ text, bg, bg2, className, handleOpen, link }) {
  return (
      <a
        href={link?link:""}
        onClick={handleOpen?handleOpen:null}
        className={`
        inline-block 
        text-sm 
        px-5 
        py-3 
        leading-none  
        rounded 
        text-bgBase 
        border-white 
        hover:border-transparent 
        hover:text-white 
        hover:bg-white 
        mt-4 
        lg:mt-0 
        w-fit
        bg-gradient-to-r 
        from-step1
        via-step2
        to-step4
        from-step4
        text-bold
        ${className}
        
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700
        `}
      >
        {text}
      </a>
  );
}

export default Button;
