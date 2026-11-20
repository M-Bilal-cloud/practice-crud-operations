import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
         <Navbar />
         <main className='absolute w-full h-full top-0 left-0'>
            <Outlet />
        </main>     
    </div>
  )
}

export default Layouts
