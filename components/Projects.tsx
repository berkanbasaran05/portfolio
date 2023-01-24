import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5,6];
  return (
    <motion.div 
    initial={{ opacity:0 ,x:-200,}}
    whileInView={{opacity:1,x:0,}}
    transition={{duration:1.5}}

    className='h-screen relative flex overflow-hidden flew-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-24 text-white text-2xl uppercase tracking-[15px] opacity-25'>Projects</h3>
     
     {/** flex-shrink-0 it helps to choise which one you want biggest object ,,,  snap center it helps to choise which one you want item to be center of page while scrolling */}

     <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
      {projects.map((project,i) => (
       <div 
       key={project}
       className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        
        <motion.img
        whileHover={{scale:[null, 1.5]}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5}}
        className='w-[500px] rounded-3xl'
        src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270059097/original/5316bf27a0b7400258c05b4b01d87a69474d50a0/do-flutter-fronted-develop-for-you.png'
        alt=''
        />
      
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h3 className='text-white uppercase text-center opacity-80 tracking-[5px]' > The project {i+1} of {projects.length} Projects  </h3>

        <p className='text-white '>
            Solwarriors is a project about nft. We created our own nft project as a team.
        </p>

      </div>
       
      
      </div>

      ))}
      </div>
     
     <div className='w-full absolute top-[30%] bg-white opacity-10 left-0 h-[400px] -skew-y-12  '>      
        </div>  
    </motion.div>
  )
}

export default Projects