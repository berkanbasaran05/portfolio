import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'

interface Props{
 photo:string,
  percentage:number,
}

function SkillElement({photo,percentage}: Props) {




  return (
    <motion.div 
    
    whileHover={{scale:[null,1.3],rotate:[null,90,180,360]}}
    className='group flex cursor-pointer relative bg-white w-20 h-20  rounded-3xl items-center justify-center'>
     
     
    
     <img
     className=' w-16 h-16 hover:opacity-0 rounded-3xl  object-contain items-center justify-center group-hover:grayscale' 
     src={photo}>
     </img>
     
    
    
    
    
    
    <div className='absolute flex flex-row justify-center  items-center mx-auto rounded-full h-20 w-20  bg-white hover:opacity-80 opacity-0'>
    <h3 className='text-center text-xl font-bold font text-black '>%{percentage}</h3>
    </div>


    </motion.div>
  )
}

export default SkillElement


//create a login page with html 