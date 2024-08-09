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

const users = {}

const riders = {}

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
    socket.on('update-user-location', ({userId, location}) => {
        // clients[userId] = location
        // const {userId, location} = data
        users[userId] = location
        console.log("Location updated:", users);
        io.emit("location-update", { users, riders });
    })
    socket.on('update-rider-location', ({riderId, location}) => {
        
        // const {riderId, location} = data
        riders[riderId] = location
        console.log("Location updated:", riders);
        io.emit("location-update", { users, riders });
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
    socket.on('disconnect', () => {
        console.log("client disconnected:", socket.id);

        delete users[socket.id]
        delete riders[socket.id]
           
        

        // delete clients[socket.id]

        io.emit('location-update', {users, riders})
    })
    
    
})

app.get("/", (req, res) => {
    res.send("Hello World!");

});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})