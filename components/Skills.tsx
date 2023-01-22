import { motion } from 'framer-motion'
import React from 'react'
import SkillElement from './SkillElement'


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col items-center mx-auto p-10
     md:text-center xl:flew-row max-w-[2000px] xl:px-10 
     min-h-screen justify-center xl:space-y-0 h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
         text-white opacity-25  text-2xl'> Skills</h3>

         <h3 className='absolute top-36 uppercase tracking-[3px] text-white opacity-25 text-xs'>
         skills I am proficient in 
         </h3>


         <motion.div
         
            initial={{x:-200,y:-200,scale:0.5}}
            whileInView={{x:0, y:0,scale:1}}
            transition={{duration:2}}
            className='grid grid-cols-4 gap-3 pb-4'>
            
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/>
            <SkillElement/> <SkillElement/> <SkillElement/> <SkillElement/>

         </motion.div>
         
      
        
        
        
    </motion.div>
  )
}

export default Skills