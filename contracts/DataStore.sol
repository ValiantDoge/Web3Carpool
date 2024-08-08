// SPDX-License-Identifier: MIT
pragma solidity ^0.5.11;

struct RegisteredUser {
    address hashCodeAddress;
    uint amountBalance;
    string userName;
    string contactNumber;
    string emailID;
}

struct Ride  {
    uint rideKey;
    address hashCodeAddress;
    string headingFrom;
    string headingTo;
    string rideDate;
    string rideTime;
    uint rideAmt;
    uint passengerLimit;
    uint numPassenger;
    string vehicleType;
    bool rideLock;
    bool isRideOpen;
    bool isRideCompleted;
}