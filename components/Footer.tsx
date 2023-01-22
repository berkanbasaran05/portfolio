import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='sticky flex flex-row items-center justify-center sm:justify-center mx-auto h-[100px] max-w-7xl text-white space-x-3  md:text-[10px] sm:p-4 '>

       <div className='flex flex-row space-x-2 sm:space-x-1 items-center xl:text-xs text-[10px] justify-center '> 
        <h3 className=''> © 2023 Design by berkanbasaran</h3>
        <h3>Made with</h3>
        <HeartIcon className=' w-7 h-7'/>
        <h3>in Turkey</h3></div>

       

   

    </div>
  )
}

export default Footer