import React, { useEffect, useRef } from 'react'
import Typewriter from "typewriter-effect"

const Home = () => {

  return (
    <div className='w-full h-screen '>
      <div className='w-full h-[80%] flex items-center justify-center relative  '>
        <img src="/macbook8.png" alt="" className=' w-full h-full block object-contain ' />
        {/* <video ref={videoRef} autoplay loop controls muted id='myVideo' width='500' height='400' className=" rounded-md absolute " >
          <source src='/carloop_dribbble.mp4' type="video/mp4" />
        </video> */}

        <div className=' w-[50%] text-white absolute p-4 glass flex flex-col gap-3 items-center justify-center  '>
          <h1 className='font-bold text-[2rem] text-center capitalize text-blue-500  ' >Explore city comfortably</h1>
          <p className=' text-center tracking-wide text-slate-300 '>"Effortless carpooling solutions that save you money, reduce your carbon footprint, and make commuting enjoyable."</p>
          <Typewriter options={{
                        strings: ['Share Your Ride', 'Travel Together Efficiently', 'Join The Carpool'],
                        autoStart: true,
                        loop: true,
                        cursor: '',
                        wrapperClassName: 'typewriterpara',
                    }} />
        </div>


      </div>

    </div>
  )
}

export default Home