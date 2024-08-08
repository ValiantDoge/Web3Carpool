// SPDX-License-Identifier: MIT
pragma solidity ^0.5.11;

contract ShareARide {
    struct Ride {
        address driver;
        uint256 availableSeats;
        uint256 pricePerSeat;
        mapping(address => bool) passengers;
    }

    mapping(uint256 => Ride) public rides;
    uint256 public rideCount;

    event RideCreated(uint256 rideId, address driver, uint256 availableSeats, uint256 pricePerSeat);
    event RideJoined(uint256 rideId, address passenger);

    function createRide(uint256 _availableSeats, uint256 _pricePerSeat) external {
        require(_availableSeats > 0, "Invalid number of available seats");
        require(_pricePerSeat > 0, "Invalid price per seat");

        rideCount++;
        rides[rideCount] = Ride(msg.sender, _availableSeats, _pricePerSeat);

        emit RideCreated(rideCount, msg.sender, _availableSeats, _pricePerSeat);
    }

    function joinRide(uint256 _rideId) external payable {
        require(_rideId > 0 && _rideId <= rideCount, "Invalid ride ID");
        Ride storage ride = rides[_rideId];
        require(ride.availableSeats > 0, "No available seats");
        require(!ride.passengers[msg.sender], "Already joined this ride");
        require(msg.value == ride.pricePerSeat, "Incorrect payment amount");

        ride.availableSeats--;
        ride.passengers[msg.sender] = true;

        emit RideJoined(_rideId, msg.sender);
    }
}