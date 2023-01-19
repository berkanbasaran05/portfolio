import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (

    <motion.div 
    initial={{
      opacity:0,
     
    }}
    animate={{
      opacity:[0.1, 0.2, 0.4 ,0.8, 0.1, 0.4],
      scale:[1,2,2,3,1],
      borderRadius:["20%","30&","50%","40%","30%"]
    }}
    transition={{
      duration:3,
    }}
    className='relative flex justify-center items-center mt-32 '>
    <div className='absolute border border-white rounded-full h-[200px] w-[200px] mt-52  animate-ping ' />  
    <div className='absolute border border-white rounded-full h-[300px] w-[300px] mt-52 opacity-5' />
    <div className='absolute border border-white rounded-full h-[500px] w-[500px] mt-52  opacity-10 ' />
    <div className='absolute border border-white rounded-full h-[650px] w-[650px] mt-52 opacity-80 animate-pulse' /> 
    </motion.div>
    
  )
}

export default BackgroundCircles