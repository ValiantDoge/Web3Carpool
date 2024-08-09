import React, { useState } from 'react';
import Web3 from 'web3';

const PublishRide = ({ driverAccount, carpool}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [rideCharges, setRideCharges] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // 1
  // Publish a ride to the blockchain
 async function ridePublish(origin, destination, departureDate, departureTime, seatLimit, pricePerSeat) {
    console.log("Publishing ride to the blockchain with params:", {
      origin, destination, departureDate, departureTime, seatLimit, pricePerSeat
    });

    try {
      carpool.methods.createRide(
        origin,
        destination,
        departureDate,
        departureTime,
        seatLimit,
        seatLimit,
        pricePerSeat
      )


      // const countRides = await carpool.methods.getRidesCount().call();
      // console.log("Rides count:", countRides.toString());

    } catch (error) {
      console.error("Error publishing ride", error);
    }

  
    
  }
  



        // string memory _origin,
        // string memory _destination,
        // string memory _departureDate,
        // uint _departureTime,
        // uint _seatLimit,
        // uint _availableSeats,
        // uint _pricePerSeat

  const handleSubmit = async (e) => {
    e.preventDefault();
    const departureTimeInSeconds = Math.floor(new Date(`${date}T${time}`).getTime() / 1000);
  
    const seatLimit = parseInt(numberOfPersons, 10);
    const pricePerSeat = parseInt(rideCharges, 10);
    
    ridePublish(from, to, date, departureTimeInSeconds, seatLimit, pricePerSeat);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" w-[90vw] p-4 md:w-8/12  grid gap-4 glass"
      >
        {/* md:md:w-10/12 flex flex-col gap-8 p-4 shadow-md  */}
        <h2 className="font-bold text-3xl text-blue-500">Publish Your Ride</h2>
        <div className=" col-span-2">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            From
          </label>
          <input
            type="text"
            value={from}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md  "
            onChange={(e) => {setFrom(e.target.value)}}
          />
        </div>

        <div className=" col-span-2">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            To
          </label>
          <input
            type="text"
            value={to}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md "
            onChange={(e) => {setTo(e.target.value)}}
          />
        </div>

        <div className=" ">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            Date
          </label>
          <input
            type="date"
            value={date}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md "
            onChange={(e) => {setDate(e.target.value)}}
          />
        </div>

        <div className=" ">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            Ride Time
          </label>
          <input
            type="time"
            value={time}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md"
            onChange={(e) => {setTime(e.target.value)}}
          />
        </div>

        <div className="">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            Number Of Persons
          </label>
          <input
            type="number"
            value={numberOfPersons}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md"
            onChange={(e) => {setNumberOfPersons(e.target.value)}}
          />
        </div>

        <div className=" ">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            Ride Charges
          </label>
          <input
            type="number"
            value={rideCharges}
            placeholder="Write here"
            className="w-full py-2 px-1 border-none outline-none bg-[#1C1C1C] rounded-md "
            onChange={(e) => {setRideCharges(e.target.value)}}
          />
        </div>

        <div className=" mb-5 ">
          <label htmlFor="" className=" font-semibold block mb-3 ">
            Vehicle Type
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 px-1 border-none outline-none rounded-md bg-[#1C1C1C] "
            onChange={(e) => {setVehicleType(e.target.value)}}
          >
            <option value="4-wheeler">4 wheeler</option>
            <option value="2-wheeler">2 wheeler</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className=" flex items-center justify-center">
          <button
            type="submit"
            value="submit"
            className="py-2 px-4 bg-blue-500  text-white text-[14px] font-semibold rounded-2xl "
          >
            Publish Ride
          </button>
        </div>
      </form>
    </div>
  );
}

export default PublishRide