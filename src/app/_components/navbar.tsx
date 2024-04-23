import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='object-fill bg-gradient-to-r from-black-500 to-blue-500 border  border-black hover:border-dotted '>
   <nav className='flex justify-between mx-4  rounded-xl relative'>
   <img src='https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png' alt='saml' className='h-[50px] w-[70px]'></img>
    <ul className='flex gap-4 text-xl  font-bold'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/doc">Doc</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
   </nav>
   </div>
  )
}

export default Navbar