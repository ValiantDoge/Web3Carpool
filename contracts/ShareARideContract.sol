// SPDX-License-Identifier: MIT
pragma solidity ^0.5.11;

contract ShareARideContract {
    struct Ride {
        uint rideId;
        address payable driver;
        string origin;
        string destination;
        string departureDate;
        uint256 departureTime;
        uint256 seatLimit;
        uint256 availableSeats;
        uint256 pricePerSeat;
    }

    // Ride[] public rides;
    uint public ridesCount = 0;
    mapping(uint => Ride) public rides;


    // Ride Creation Event

    event RideCreated(
        uint rideId,
        address payable driver,
        string origin,
        string destination,
        string departureDate,
        uint256 departureTime,
        uint256 seatLimit,
        uint256 availableSeats,
        uint256 pricePerSeat
    );

    event RideRequested(
        uint rideId,
        address payable driver,
        string origin,
        string destination,
        string departureDate,
        uint departureTime,
        uint seatLimit,
        uint availableSeats,
        uint pricePerSeat
    );

    function createRide(
        string memory _origin,
        string memory _destination,
        string memory _departureDate,
        uint _departureTime,
        uint _seatLimit,
        uint _availableSeats,
        uint _pricePerSeat
        ) public {

        ridesCount ++;
        rides[ridesCount] = Ride(
            ridesCount,
            msg.sender,
            _origin,
            _destination,
            _departureDate,
            _departureTime,
            _seatLimit,
            _availableSeats,
            _pricePerSeat
        );
        
        emit RideCreated(
            ridesCount,
            msg.sender,
            _origin,
            _destination,
            _departureDate,
            _departureTime,
            _seatLimit,
            _availableSeats,
            _pricePerSeat
        );


    }

    function getRidesCount() public view returns (uint) {
        // return rides.length;
        return ridesCount;
    }

    function requestRide(uint _id)  public payable {
        //Fetch RIde
        Ride memory _ride = rides[_id];
        //Check if ride is available
        require(_ride.availableSeats > 0, "No available seats");
        //Check if user is not the driver
        require(msg.sender != _ride.driver, "You are the driver");
        //Check if user has enough funds
        require(msg.value >= _ride.pricePerSeat, "No enough funds");

        //Transfer money to driver
        _ride.driver.transfer(_ride.pricePerSeat);
        //Decrement available seats
        _ride.availableSeats--;
        

        emit RideRequested(
            _ride.rideId,
            _ride.driver,
            _ride.origin,
            _ride.destination,
            _ride.departureDate,
            _ride.departureTime,
            _ride.seatLimit,
            _ride.availableSeats,
            _ride.pricePerSeat
        );

    }

    // function getRide()
    //     public
    //     view
    //     returns (
    //         uint,
    //         address,
    //         string memory,
    //         string memory,
    //         string memory,
    //         uint256,
    //         uint256,
    //         uint256,
    //         uint256
    //     )
    // {
    //     Ride memory ride = rides[_index - 1];
    //     return (
    //         ride.rideId,
    //         ride.driver,
    //         ride.origin,
    //         ride.destination,
    //         ride.departureDate,
    //         ride.departureTime,
    //         ride.seatLimit,
    //         ride.availableSeats,
    //         ride.pricePerSeat
    //     );
    // }

    // function bookSeat(uint256 _index) public payable {
    //     Ride storage ride = rides[_index];
    //     require(ride.availableSeats > 0, "No available seats");
    //     require(msg.value == ride.pricePerSeat, "Invalid price");
    //     ride.availableSeats--;
    //     ride.driver.transfer(msg.value);
    // }
}