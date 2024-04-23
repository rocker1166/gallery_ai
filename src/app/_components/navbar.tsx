import React from 'react'

function Navbar() {
  return (
    <div className=' '>
   <nav className='flex justify-between mx-4 p-4 bg-slate-600 rounded-xl relative'>
    <h1>Art Gallery</h1>
    <ul className='flex gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
   </nav>
   </div>
  )
}

export default Navbar