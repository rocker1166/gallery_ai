"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'

function Navbar() {
  const router = useRouter();
  return (
    <div className='object-fill  bg-fixed sticky '>
   <nav className='flex justify-between mx-8 bg-gradient-to-r from-black-500 to-blue-500 border  border-black hover:border-dotted rounded-xl relative'>
   <img src='https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png' alt='saml' className='h-[50px] w-[70px]'></img>
    <ul className='flex gap-4 text-xl  font-bold'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/doc">Doc</Link></li>
      <li><Link href="/about">About</Link></li>
    
     <li><SignedOut>
        <SignInButton />
        </SignedOut>
        <div className='flex justify-between content-center gap-3 '>
        <SignedIn>


          <UploadButton endpoint='imageUploader' onClientUploadComplete={() =>{router.refresh(); }  } />
          <UserButton />
        </SignedIn>
        </div>
        </li>
        
    </ul>
   </nav>
   </div>
  )
}

export default Navbar