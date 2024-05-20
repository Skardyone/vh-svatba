
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function page() {
  return (
    <div className='h-screen w-full bg-white'>
      <Link href={"/"} className='relative xl:absolute top-5 left-5  xl:top-10 xl:left-10 text-[2.5rem] xl:text-[4rem] text-black py-8'><FaArrowLeft/></Link>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5I7_8mC1B4DwCLeqdBzhpeLVs9TSvHrvkIvxQnJa61zei6Q/viewform?embedded=true" className='w-full h-full' >Načítání…</iframe>
    </div>
  )
}

export default page