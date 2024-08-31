const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("User Connected: ", socket.id);

    socket.on("send-location", (data) => {
        io.emit("recieve-location", { 
            id: socket.id,
            ...data
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);
    });
});

app.get('/', (req, res) => {
    res.render("index");
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
