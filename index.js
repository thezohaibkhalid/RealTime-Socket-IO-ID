const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express(); // Define app before using it
const server = http.createServer(app);
const io = new Server(server);

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory where your EJS files are stored
app.set("views", path.resolve("./public/views"));

// Serve static files (if any) from the public folder
app.use(express.static(path.resolve("./public")));

// Route to render the login page
app.get("/", (req, res) => {
    return res.render("login"); // Ensure login.ejs exists in the views folder
});

// Socket IO
io.on("connection", (socket) => {
    console.log("new user connected", socket.id);
});

// Start the server
server.listen(9000, () => console.log("Server started at port no 9000"));
