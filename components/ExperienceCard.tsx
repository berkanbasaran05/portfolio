import React from 'react'
import { motion } from 'framer-motion'
import { describe } from 'node:test';

type Props = {
  describe:string;
  projectTitle:string;
  myTitleOfProject:string;
}

  
  function ExperienceCard({describe,projectTitle, myTitleOfProject }: Props) {
  return (
    <article
    
    className='flex flex-col rounded-3xl bg-opacity-5  items-center
     space-y-7 flex-shrink-0 w-[300px]  md:w-[400px] md:h-[700px] xl:w-[400px] xl:h-[500px]
      snap-center h-[500px] p-10 hover:opacity-70 cursor-pointer transition-opacity duration-200  bg-white'>
    <motion.img
    initial={{
        y:-100,
        opacity:0
    }}
    transition={{
        duration: 1.2}}
    whileInView={{opacity:1, y:0}}
    
    className='w-32 h-32  rounded-full xl:w-[96px] xl:h-[96px] object-cover
     object-center'  
    src='https://www.linkpicture.com/q/1673025977937.jpeg'
    alt=''
    />
    <div className='px-0 md:px-10'>
      <h4 className='text-white text-sm uppercase font-light'>{myTitleOfProject}</h4>
      <p className='font-bold text-m mt-1 text-white  opacity-25'>{projectTitle} </p> 
      <div className='flex space-x-2 my-2'> 
       
     </div>  
     <p className='uppercase  text-gray-300 text-sm'>About Company</p>

      <span className='list-disc space-y-4 mt-2 text-[8px] md:text-xs text-white opacity-25'>
        {describe}
      </span>
        
       
    </div>    



    </article>
  )
}

export default ExperienceCard