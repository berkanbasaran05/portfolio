import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky flex flex-row top-0 p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
     <motion.div 
     initial={
        {
            x: -200,
            y: -200,
            opacity : 0,
            scale: 0.5
        }}
     animate= {{
            x : 0,
            y : 0,
            opacity :1,
            scale: 1
     }}
     transition={{
        duration:1.5,
     }}   
     className='flex flex-row items-center'> 
     {/* social icons */}

     <SocialIcon url='https://twitter.com/metaberka' bgColor='transparent' fgColor='white'/>    
     <SocialIcon url='https://github.com/berkanbasaran05' bgColor='transparent' fgColor='white'/>
     <SocialIcon url='https://www.instagram.com/berbasgram/' bgColor='transparent' fgColor='white'/>
     <SocialIcon url='https://www.linkedin.com/in/berkan-ba%C5%9Faran-67873921b//' bgColor='transparent' fgColor='white'/>
   

    
        
    </motion.div>  

    <motion.div 
    initial={{
        x:200,
        y:-200,
        opacity:0,
        scale:0.5
        
    }}
    animate={{
        x:0,
        y:0,
        opacity:1,
        scale:1        
    }}
    transition={{
        duration:1.5
    }}
    className='flex flex-row items-center cursor-pointer'> 
       
       <SocialIcon
        className='cursor-pointer'
        network='email'
        bgColor='transparent'
        fgColor='white'
        
        /> 
       
        <p className='uppercase hidden md:inline-flex text-sm text-white'>Contact me</p>
        
    </motion.div>
        

    
    </header>
  )
}