import { useState } from 'react'
import './css/style.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
 

  return (
    <div className='min-h-screen bg-[#e9edf6]'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
