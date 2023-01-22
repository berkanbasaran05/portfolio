import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='sticky flex flex-row items-center justify-between mx-auto h-[100px] max-w-7xl text-white space-x-3'>

       <div className='flex flex-row space-x-2'> <h3 className=''> © 2023 Design by berkanbasaran</h3>
        <h3>Made with</h3>
        <HeartIcon className=' w-7 h-7'/>
        <h3>in Turkey</h3></div>

        <div className='flex flex-row space-x-2'>
        <Link href="#about"><button>About Me</button></Link>
        <Link href="#experience"><button>Experience</button></Link>
        <Link href="#skills"><button>Skills</button></Link>
        <Link href="#projects"><button>Projects</button></Link>
        <Link href="#contactme"><button>Contact Me</button></Link>
       

         </div>

    </div>
  )
}

export default Footer