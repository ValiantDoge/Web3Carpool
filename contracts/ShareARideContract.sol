// SPDX-License-Identifier: MIT
pragma solidity ^0.5.11;
import "./DataStore.sol";

contract ShareARideContract {
    mapping (uint => RegisteredUser) public registerUsersList;
    mapping (uint => Ride) public rideList;
    uint rideIndex;
    uint userIndex;
    uint rideKey;

    constructor(){
        rideIndex = 0;
        userIndex = 0;
        rideKey = 1;
    }

    function AddRide(address hashAddress, 
                          string memory from, 
                          string memory to, 
                          string memory date, 
                          string memory time, 
                          uint amount, 
                          uint passengerLimit, 
                          string memory vehicleType
                         ) public {
        Ride memory ride = Ride(rideKey, hashAddress, from, to, date, time, amount, passengerLimit, 0, vehicleType, false, true, false);
        rideList[rideIndex] = ride;
        rideIndex++;
        rideKey++;
    }

    function RegisterUserAccount(address hashAddress, 
                                 string memory userName, 
                                 string memory phoneNumber,
                                 string memory email
                                )  public{
        RegisteredUser memory user = RegisteredUser(hashAddress, 0, userName, phoneNumber, email);
        registerUsersList[userIndex] = user;
        userIndex++;
    }

    function searchView(uint rKey) public view returns(
        string memory,
        string memory,
        string memory,
        string memory,
        uint,
        uint,
        uint,
        string memory,
        bool, bool, bool
    ) {
       uint searchIndex = rKey - 1; 
       Ride memory ride = rideList[searchIndex];

       return (
              ride.headingFrom,
              ride.headingTo,
              ride.rideDate,
              ride.rideTime,
              ride.rideAmt,
              ride.passengerLimit;
              ride.numPassenger,
              ride.vehicleType,
              ride.rideLock,
              ride.isRideOpen,
              ride.isRideCompleted
         );
    }
}