
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function page() {
  return (
    <div className='h-screen w-full bg-zelena'>
      <Link href={"/"} className='relative xl:absolute top-5 left-5  xl:top-10 xl:left-10 text-[2.5rem] xl:text-[4rem] text-black py-8'><FaArrowLeft/></Link>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfH6i3HZTtfKxL7XfqDkhKZ4chi7T_3VH3jHEWKATnQVe74Mw/viewform?embedded=true" className='bg-zelena' width="100%" height="100%">Načítání…</iframe>
    </div>
  )
}

export default page