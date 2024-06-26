import React from 'react'
import { motion } from 'framer-motion' 
import ExperienceCard from './ExperienceCard'

type Props = {}

const Workexperience = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
        y:-100
    }}
    whileInView={{x:0, y:0, opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen overflow-hidden md:text-left md:flex-col  xl:flew-row md:p-10 max-w-full px-10 justify-evenly mx-auto items-center'>

    <h3 className=' top-24 mt-20 xl:mt-8 md:mt-8 items-center text-white opacity-25 uppercase tracking-[20px] text-2xl'>
      Experience
    </h3>
     <div className='w-full flex space-x-5 overflow-x-scroll p-10 mb-4  snap-x snap-mandatory'>
     <ExperienceCard projectTitle='Yoorum.com'  myTitleOfProject='Software Developer' describe='I was javascript Full-Stack software developer on Yoorum. Yoorum was project for reviewing of products and brands.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='hizmeto.com'  myTitleOfProject='Software Developer' describe='I was javascript Full-Stack software developer on Yoorum. Yoorum was project for reviewing of products and brands.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='fabricfleet.com'  myTitleOfProject='Software Developer' describe='I was javascript Full-Stack software developer on Yoorum. Yoorum was project for reviewing of products and brands.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='Sosyaldugun.com'  myTitleOfProject='Software Developer' describe='I was Full-Stack software developer on the project. .I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='cihangir.k12.tr'  myTitleOfProject='Software Developer' describe='I was Full-Stack software developer on the project.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='regeditbilisim.com'  myTitleOfProject='Software Developer' describe='I was Full-Stack software developer on the project.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='mypinball.eu'  myTitleOfProject='Software Developer' describe='I was Full-Stack software developer on the project.I used Next JS for fronted and Nest Js for backend development.'/>
     <ExperienceCard projectTitle='kiosk self-order system'  myTitleOfProject='Software Developer' describe='I was Full-Stack software developer on the project.I used Next JS for fronted and Nest Js for backend development.'/>
     </div>
    


    </motion.div>
  )
}

export default Workexperience