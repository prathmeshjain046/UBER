import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
            <img className='w-16 ml-8' src="/images/Uber_logo_2018.png" alt="Uber" />
            <div className='bg-white pb-7 py-4 px-4' >
                <h2 className='text-3xl font-bold'>Get Started with Rider</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div> 
        </div>

    </div>
  )
}

export default Home