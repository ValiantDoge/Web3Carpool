const ShareARideContract = artifacts.require('ShareARideContract');

contract('ShareARideContract', (accounts) => {
    let shareARideContract = null;

    before(async () => {
        shareARideContract = await ShareARideContract.deployed();
    });

    describe('deployment', async () => { 
        it('deploys successfully', async () => {
            const address = shareARideContract.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

    });



    describe('rides', async () => { 
        let result, rideCount;
        before(async () => {
            result = await shareARideContract.createRide('Origin', 'Destination 1', 'Date', 343423, 3, 3, web3.utils.toWei('1', 'Ether'));
            rideCount = await shareARideContract.ridesCount();
        });
        
        it('creates ride', async () => {
            assert.equal(rideCount, 1);
            const event = result.logs[0].args;
            assert.equal(event.rideId.toNumber(), rideCount.toNumber(), 'id is correct');
            assert.equal(event.origin, 'Origin', 'origin is correct');
            assert.equal(event.destination, 'Destination 1', 'destination is correct');
            assert.equal(event.departureDate, 'Date', 'date is correct');
            assert.equal(event.availableSeats, 3, 'seats is correct');
            assert.equal(event.seatLimit, 3, 'seatLimit is correct');
            assert.equal(event.pricePerSeat, '1000000000000000000', 'price is correct');
            assert.equal(event.driver, accounts[0], 'driver is correct');

        });

        it('lists rides', async () => {
            const ride = await shareARideContract.rides(rideCount);
            assert.equal(ride.rideId.toNumber(), rideCount.toNumber(), 'id is correct');
            assert.equal(ride.origin, 'Origin', 'origin is correct');
            assert.equal(ride.destination, 'Destination 1', 'destination is correct');
            assert.equal(ride.departureDate, 'Date', 'date is correct');
            assert.equal(ride.availableSeats, 3, 'seats is correct');
            assert.equal(ride.seatLimit, 3, 'seatLimit is correct');
            assert.equal(ride.pricePerSeat, '1000000000000000000', 'price is correct');
            assert.equal(ride.driver, accounts[0], 'driver is correct');

        });

        it('requests ride', async () => {
            res = await shareARideContract.requestRide(rideCount, { from: accounts[1], value: web3.utils.toWei('2', 'Ether') });
            
            const event = result.logs[0].args;
            assert.equal(event.availableSeats.toNumber(), 2, 'seats is correct');
        });

        
    });
});