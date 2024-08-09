import React, {useState, useEffect} from 'react';
import Web3 from 'web3';

const RideList = ({carpool}) => {


    // Get rides count from the blockchain
    // Async function to get rides count
    const [ridesCount, setRidesCount] = useState(0);
    const [rides, setRides] = useState([]);

    // const [loading, setLoading] = useState(true);


    if (carpool) {
        useEffect(() => {
            async function getRcount() {
                
                try {
                    const countRides = await carpool.methods.getRidesCount().call();
                    setRidesCount(parseInt(countRides, 10));
        
                    const rideArry = [];

                    for (let i = 1; i <= countRides; i++) {
                        console.log(i);
                        rideArry.push(i)

                        // const ride = await carpool.methods.rides(i).call();
                        
                    }
                    
                    
                    setRides(rideArry);
                    console.log("Rides count:", countRides.toString());
                } catch (error) {
                    console.error("Error getting rides count", error);
                }
            }
            console.log(carpool);
            
            getRcount();
        }, []);
    }

    
    



    const ridesMap = [
        { id: 1, origin: 'Beeri, Mangaluru', destination:"City Center Mall",  time: '10:00 AM', price: '0.5 ETH' },
        { id: 2, origin: 'Beeri, Mangaluru', destination:"City Center Mall", time: '2:30 PM', price: '0.5 ETH' },
        { id: 3, origin: 'Beeri, Mangaluru', destination:"City Center Mall", time: '5:00 PM', price: '0.5 ETH' },
    ];

    

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Current Rides</h2>
            <ul className="space-y-4">
                {ridesMap.map((ride) => (
                    <li
                        key={ride.id}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow rounded-md flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">Heading from {ride.origin},</h3>
                            <h3 className="text-lg font-semibold">to {ride.destination}</h3>
                            <p className="text-gray-700 font-bold">{ride.price}</p>
                            <p className="text-gray-700">{ride.time}</p>
                        </div>
                        <button className="bg-black px-4 py-2 rounded-md">
                            Join
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RideList;