import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                email : email,
                password : password
            })
            setEmail('');
            setPassword('');
        }

  return (
      <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="/images/Uber_logo_2018.png" alt="Uber" />
                <form onSubmit ={ (e) => {
                    submitHandler(e)
                    }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input 
                    required 
                    value={email} 
                    onChange={(e) => { setEmail(e.target.value) }} 
                    className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='example@example.com' />
                    
                    <h3 className='text-lg font-medium  mb-2'>Enter Password</h3>
                    <input 
                    required 
                    value={password} 
                    onChange={(e) => { setPassword(e.target.value) }}
                    className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='Enter Password' />'

                    <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                </form>
                <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link to='/login' 
                className='bg-[orange] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
            </div>
        </div>
  )
}

export default CaptainLogin