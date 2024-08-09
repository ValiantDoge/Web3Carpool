import express from 'express';
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io';

const app = express();
app.use(cors());
const port = 3000;

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type']
    }
})

// const clients = {}

let users = {}

// const riders = {}

io.on('connection', (socket) => {
    // socket.on('send-location', (data) => {
    //     io.emit('receive-location', {id: socket.id, ...data})
    // })


    // console.log("New client connected:", socket.id);
    // socket.on('update-location', (location) => {
    //     clients[socket.id] = location
    //     io.emit('location-update', clients)
    // })
    console.log("New client connected:", socket.id);
    socket.on('update-user-location', ({userId, currentLocation, fromLocation, toLocation}) => {
        // clients[userId] = location
        // const {userId, location} = data

        

        users[userId] = {currentLocation, fromLocation, toLocation}
        console.log("Location updated:", users);
        console.log("Received location update for user:", userId);
        console.log("Current Location:", currentLocation);
        console.log("From Location:", fromLocation);
        console.log("To Location:", toLocation);
        io.emit("location-update", { users });

        // setTimeout(() => {
        //   users[userId] = {
        //     currentLocation,
        //     fromLocation,
        //     toLocation,
        //   };
        //   io.emit("locationUpdate", { users });
        // }, 100);
    })
    
   
    // socket.on('assign-rider', ({userId, riderId}) => {
    //     assignRiders[userId] = riderId
    // })
    
    // socket.on('disconnect', () => {
    //     io.emit('user-disconnect', socket.id)
    // })
    
    
    // socket.on('disconnect', () => {
    //     console.log("client disconnected:", socket.id);

    //     delete clients[socket.id]

    //     io.emit('location-update', clients)
    // })






    // socket.on('disconnect', () => {
    //     console.log("client disconnected:", socket.id);

    //     delete clients[socket.id]

    //     io.emit('location-update', clients)
    // })
    // socket.on('disconnect', () => {
    //     console.log("client disconnected:", socket.id);

    //     delete users[socket.id]
    //     delete riders[socket.id]
           
        

    //     // delete clients[socket.id]

    //     io.emit('location-update', {users, riders})
    // })
    socket.on('disconnect', () => {
        console.log("client disconnected:", socket.id);

        delete users[socket.id]

        // delete clients[socket.id]

        io.emit('location-update', {users})
    })
    
    
})

app.get("/m", (req, res) => {
    res.send("Hello World!");

});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})