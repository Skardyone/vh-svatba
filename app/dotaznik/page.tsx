
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function page() {
  return (
    <div className='h-screen w-full bg-zelena'>
      <Link href={"/"} className='relative xl:absolute top-5 left-5  xl:top-10 xl:left-10 text-[2.5rem] xl:text-[4rem] text-black py-8'><FaArrowLeft/></Link>
     
    </div>
  )
}

export default page