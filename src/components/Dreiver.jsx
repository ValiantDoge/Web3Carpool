import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from 'react-icons/bs';
// 1
const Dreiver = () => {
    return (
        <div className='w-full flex flex-col  min-h-screen '>
            <div className='w-full p-2 flex justify-between items-center '>
                <h1 className=' capitalize text-[2rem] p-2 font-bold text-blue-500'>carPooling - Dreiver Panel </h1>

                <div className=' flex gap-6 p-2'>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] '><Link to={''}>Switch Account</Link></button>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-[14px]'><Link to={''}>Logout</Link></button>
                </div>
            </div>

            <div className='grid grid-cols-10  mt-6 '>
                <div className=' p-2 m-4 mt-4 bg-blue-50 rounded-md shadow-md  md:col-span-6 glass'>
                    <h2 className=' capitalize text-[2rem] p-2 font-semibold'>Welcome User </h2>
                    <div className=' p-2 flex items-center'>
                        <span className='font-bold'>Account ID</span> : djjjdjjdjjdjjdjjjdjjdjjjdjjdjjjdjdj
                    </div>

                    <div className=' p-2 flex items-center'>
                        <span className='font-bold'>Account Balance</span> : 78.80080808800808008
                    </div>
                </div>

                <div className=' p-2 m-4 mt-4 bg-indigo-50 shadow-md rounded-md md:col-span-4 glass '>
                    <h2 className=' capitalize text-[2rem] p-2 font-semibold'>Menu Options </h2>
                    <div className='p-2 flex flex-col gap-3'>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] '><Link>
                            Booked Ride
                            <BsArrowUpRight className='text-white inline ml-2 ' />
                        </Link></button>

                        <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] '><Link>
                            View All Ride
                            <BsArrowUpRight className='text-white inline ml-2 ' />
                        </Link></button>

                        <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-[14px]  '><Link>
                            Search By Location
                            <BsArrowUpRight className='text-white inline ml-2 ' />
                        </Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dreiver