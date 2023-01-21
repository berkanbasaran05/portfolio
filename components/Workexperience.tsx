import React from 'react'
import { motion } from 'framer-motion' 
import ExperienceCard from './ExperienceCard'

type Props = {}

const Workexperience = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{x:0, y:0, opacity:[0.1,0.2,0.3,0.4,0.5,0.6,1]}}
    transition={{delay:1.5,}}
    className='flex flex-col relative h-screen overflow-hidden md:text-left md:flex-col  xl:flew-row md:p-10 max-w-full px-10 justify-evenly mx-auto items-center'>

    <h3 className=' top-24 mt-20 xl:mt-8 md:mt-8 items-center text-white opacity-25 uppercase tracking-[20px] text-2xl'>
      Experience
    </h3>
     <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
     <ExperienceCard />
     <ExperienceCard />
     <ExperienceCard />
     <ExperienceCard />
     <ExperienceCard />
     </div>
    


    </motion.div>
  )
}

export default Workexperience