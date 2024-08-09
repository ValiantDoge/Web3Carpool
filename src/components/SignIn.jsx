import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [address, setAddress] = useState("");
  // 1
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center gap-3 mt-12 w-full h-screen items-center relative bodybg ">
        <div className="absolute top-0">
          <img src="../public/car-sharing.png" alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" w-[90vw]  md:w-5/12 flex flex-col gap-8 p-4 shadow-md glass  "
        >
          <h2 className="font-bold text-3xl text-blue-500">
            Sign In as Driver
          </h2>

          <div className="w-full flex flex-col gap-2 ">
            <label className=" font-semibold ">User Address</label>
            <input
              type="text"
              className="w-full py-2 px-1 outline-none  bg-[#1C1C1C] rounded-md "
              placeholder="Enter address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
          <Link to="/rides-listing" className="px-4 py-2 border-none rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400">
              <button
                type="submit"
                
              >
                Sign In
              </button>
            </Link>
            <p>
              New user?
              <Link to="/register" className="ml-3 text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>

        {/* passanger details  */}
        <form className=" w-[90vw]  md:w-5/12 flex flex-col gap-8 p-4 shadow-md glass ">
          <h2 className="font-bold text-3xl text-blue-500">
            Sign In as Passenger
          </h2>

          <div className="w-full flex flex-col gap-2 ">
            <label className=" font-semibold ">User Address</label>
            <input
              type="text"
              className="w-full py-2 px-1 border-none outline-none  bg-[#1C1C1C] rounded-md"
              placeholder="Enter address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/rides-listing" className="px-4 py-2 border-none rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400">
              <button
                type="submit"
                
              >
                Sign In
              </button>
            </Link>
            <p>
              New user?
              <Link to="/register" className="ml-3 text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn