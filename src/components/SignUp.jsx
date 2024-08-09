import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [contactNum, setContactNum] = useState('')
    const [hashCode, setHashCode] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col justify-center items-center w-full min-h-screen bodybg '>
           
            <form onSubmit={handleSubmit} className='w-[90vw] md:w-8/12 flex flex-col gap-6 p-4 mt-5 shadow-md glass '>
                <h2 className='font-bold text-3xl text-blue-500'>Sign Up </h2>

                <div className='w-full flex flex-col gap-2 '>
                    <label className=' font-semibold '>Username</label>
                    <input
                        type="text"
                        value={username}
                        className='w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md'
                        placeholder='Enter username'
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>

                <div className='w-full flex flex-col gap-2 '>
                    <label className=' font-semibold '>Email</label>
                    <input
                        type="email"
                        value={email}
                        className='w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md '
                        placeholder='Enter email'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div className='w-full flex flex-col gap-2 '>
                    <label className=' font-semibold '>Contact no.</label>
                    <input
                        type="password"
                        value={contactNum}
                        className='w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md'
                        placeholder='Enter contact number'
                        onChange={(e) => { setContactNum(e.target.value) }} />
                </div>

                <div className='w-full flex flex-col gap-2 '>
                    <label className=' font-semibold '>Password</label>
                    <input
                        type="password"
                        value={hashCode}
                        className='w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md'
                        placeholder='Enter hashcode address'
                        onChange={(e) => { setHashCode(e.target.value) }} />
                </div>

                <div className='flex flex-col gap-4'>
                    <button
                        type='submit'
                        className='px-4 py-2 border-none rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400'
                    >Sign up</button>
                    <p>Already have an account?<Link to="/login" className='ml-3 text-blue-500'>Login</Link></p>
                </div>
            </form>

        </div>
    )
}

export default SignUp