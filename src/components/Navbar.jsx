import React from 'react'
import logo from "/car-sharing.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const classLink = ({ isActive }) => isActive
    ? 'bg-blue-500 text-[14px] text-white hover:bg-blue-50 hover:text-black rounded-md px-3 py-2'
    : ' text-white text-[14px] hover:bg-indigo-200 hover:text-black rounded-md px-3 py-2';

    return (
        <div className=' sticky top-0 bg-black flex flex-col py-4 md:flex-row items-center justify-between z-99 ' >
            <div className=' flex items-center justify-center gap-1 text-[1.5rem] capitalize font-bold text-[#4338CA] '>
                <img src={logo} alt="" className=' size-[45px] ' />
            </div>

            <div className='flex gap-3 ' >
                <NavLink to={'/'} className={classLink}>Home</NavLink>
                <NavLink to={'/passenger'} className={classLink}>View Passanger Panel</NavLink>
                <NavLink to={'/dreiver'} className={classLink}>View Driver Panel</NavLink>
                <NavLink to={'/login'} className={classLink}>Sign In</NavLink>
                <NavLink to={'/logout'} className={classLink}>Logout</NavLink>
            </div>
        </div>
    )
}


export default Navbar