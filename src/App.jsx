import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Dreiver from "./components/Dreiver";
import Passenger from "./components/Passenger";
import PublishRide from "./components/PublishRide";
import Map from "./components/Map";
import Web3 from "web3";
import React, { useEffect, useState } from "react";
import ShareARideContract from "../abis/ShareARideContract.json";





function App() {

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access
      } catch (error) {
        console.error("User denied account access");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };
  const [accountDetails, setAccountDetails] = useState({
    address: '',
    balance: 0,
    rideCount: 0,
  });

  const [carpooling, setCarpooling] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBlockchainData = async () => {
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      
      const balance = await web3.eth.getBalance(accounts[0]);
      setAccountDetails({
        address: accounts[0],
        balance: web3.utils.fromWei(balance, 'ether'),
      });

      const networkId = await web3.eth.net.getId();
      const networkData = ShareARideContract.networks[networkId];

      if (networkData) {
        const Carpooling = new web3.eth.Contract(ShareARideContract.abi, networkData.address);
        setCarpooling(Carpooling);
        setLoading(false);
      }else{
        window.alert('Carpooling contract not deployed to detected network.');
      }
      
  }

  
  
  useEffect( () => {
    loadWeb3();
    loadBlockchainData();
    
  }, []); // Empty array means this effect runs only once
  
  const Layout = () => {
    return (
      <div className=" md:w-9/12 mx-auto ">
        {/* thsi is outlet  */}
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/logout",
          element: <SignIn />,
        },
        {
          path: "/dreiver",
          element: <Dreiver driverAccount={accountDetails} />,
        },
        {
          path: "/passenger",
          element: <Passenger />,
        },
        {
          path: "/publishride",
          element: <PublishRide />,
        },
        {
          path: "/map",
          element: <Map />,
        },
      ],
    },
  ]);
  // 1
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
