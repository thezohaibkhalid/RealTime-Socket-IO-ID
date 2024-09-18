const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express(); 
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");

app.set("views", path.resolve("./public/views"));

// app.use(express.static(path.resolve("./public")));

// Route to render the login page
app.get("/", (req, res) => {
    return res.render("login"); 
});

// Socket IO
io.on("connection", (socket) => {
    console.log("new user connected", socket.id);
});

// Start the server
server.listen(9000, () => console.log("Server started at port no 9000"));
