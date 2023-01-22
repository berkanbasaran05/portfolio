import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
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
      <h4 className='text-white text-sm uppercase font-light'>Ceo of SolWARRIOR</h4>
      <p className='font-bold text-m mt-1 text-white  opacity-25'>SOLWARRIOR </p> 
      <div className='flex space-x-2 my-2'> 
       <img 
       className='h-10 w-10 rounded-full'
       src='https://pbs.twimg.com/profile_images/1456412742961799168/p1uuQ0_7_400x400.jpg'
       />
        <img 
       className='h-10 w-10 rounded-full'
       src='https://pbs.twimg.com/profile_images/1456412742961799168/p1uuQ0_7_400x400.jpg'
       />
        
        <img 
       className='h-10 w-10 rounded-full'
       src='https://pbs.twimg.com/profile_images/1456412742961799168/p1uuQ0_7_400x400.jpg'
       />
     </div>  
     <p className='uppercase  text-gray-300 text-sm'>Started work ... -Ended..</p>

       <ul className='list-disc space-y-4 mt-2 ml-4 text-[8px] md:text-xs text-white opacity-25'>
        <li>hey hey hey hey hey heyhey hey hey</li>
        <li>hey hey hey hey hey heyhey hey hey</li>
        <li>hey hey hey hey hey heyhey hey hey</li>
        <li>hey hey hey hey hey heyhey hey hey</li>
        <li>hey hey hey hey hey heyhey hey hey</li>    




        </ul>
        
       
    </div>    



    </article>
  )
}

export default ExperienceCard