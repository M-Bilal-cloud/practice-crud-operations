import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='absolute bg-white/30 backdrop-blur-[40px] w-[70%] rounded-[30px] h-14 shadow-[0_8px_32px_rgba(0,0,0,0.2)] top-[20px] left-[50%] translate-x-[-50%] px-5 grid grid-cols-3 gap-4 p-2 z-50'>
        <NavLink className='flex gap-2 items-center'>
            <img src="/images/logo.png" className='w-10 h-10' alt="logo" />
            <h1 className='text-xl font-bold'>InvoiceX</h1>
        </NavLink>
        <div className='flex justify-center items-center gap-4'>
            <NavLink to='/products' className='custom-btn' >Products</NavLink>
            <NavLink to='/products/add' className='custom-btn' >Add Product</NavLink>
        </div>
        <div className='flex justify-end gap-4'>
            <NavLink to='/create-invoice' className='custom-btn' >Create Invoice</NavLink>
            <NavLink to='/return' className='custom-btn' >Return</NavLink>
        </div>
    </div>
  )
}

export default Navbar
