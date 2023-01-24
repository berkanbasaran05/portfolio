import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function SkillElement({}: Props) {
  return (
    <motion.div 
    
    whileHover={{scale:[null,1.3],rotate:[null,90,180,360]}}
    className='group flex cursor-pointer relative items-center justify-center'>
     
     
    
     <img
     className='rounded-3xl w-18 h-16 hover:opacity-0 group-hover:grayscale' 
     src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png'>
     </img>
     
    
    
    
    
    
    <div className='absolute flex flex-row justify-center  items-center mx-auto rounded-3xl h-16 w-16 bg-white hover:opacity-80 opacity-0'>
    <h3 className='text-center text-xl font-bold font text-black '>%25</h3>
    </div>


    </motion.div>
  )
}

export default SkillElement