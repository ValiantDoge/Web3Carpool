import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className=' flex justify-center gap-3 w-full items-center h-[80vh]  '>
                <form onSubmit={handleSubmit} className=' w-[90vw]   md:w-5/12 flex flex-col gap-8 p-4 shadow-md glass  '>
                    <h2 className='font-bold text-3xl text-blue-500'>Sign In as Driver</h2>

                    <div className='w-full flex flex-col gap-2 '>
                        <label className=' font-semibold '>User Address</label>
                        <input
                            type="text"
                            className='w-full py-2 px-1 outline-none  bg-[#1C1C1C] rounded-md '
                            placeholder='Enter address'
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }} />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button
                            type='submit'
                            className='px-4 py-2 border-none rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400'
                        >Sign In </button>
                        <p>New user?<Link to="/register" className='ml-3 text-blue-500'>Register</Link></p>
                    </div>
                </form>

                {/* passanger details  */}
                <form className=' w-[90vw]  md:w-5/12 flex flex-col gap-8 p-4 shadow-md glass '>

                    <h2 className='font-bold text-3xl text-blue-500'>Sign In as Passenger</h2>

                    <div className='w-full flex flex-col gap-2 '>
                        <label className=' font-semibold '>User Address</label>
                        <input
                            type="text"
                            className='w-full py-2 px-1 border-none outline-none  bg-[#1C1C1C] rounded-md'
                            placeholder='Enter address'
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }} />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button
                            type='submit'
                            className='px-4 py-2 border-none rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400'
                        >Sign In</button>
                        <p>New user?<Link to="/register" className='ml-3 text-blue-500'>Register</Link></p>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SignIn