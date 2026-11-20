import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className="h-screen bg-[url('/images/bg-image.png')] bg-cover bg-no-repeat bg-center relative">
        <h1 
        style={{textShadow: '0 0 8px rgba(0,0,0,0.2)'}}
        className='absolute text-4xl font-semibold sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-white top-[20%] left-[50%] translate-x-[-50%] translate-y-[-20%]'>InvoiceX</h1>
        <div className='absolute top-[45%] translate-y-[-45%] left-[50%] translate-x-[-50%] z-50 w-[100%] sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%]'>
          <h1 className='text-white text-center'>Effortless invoice generation for modern businesses. Create, manage, and send professional invoices in seconds</h1>
          <div className='flex justify-center mt-2'>
              <NavLink to='/invoice/create' className='custom-btn'>Create Invoice</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Home
