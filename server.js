// Imports
const express = require("express");
const mongoose = require("mongoose");
const {connection_url} = require("./database.js");

// App Config
const app = express();
const port = 3000 || process.env.PORT;

// Middlewares

// DB config
mongoose.connect(connection_url, { useNewUrlParser: true });

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Heyyy !"));

// Listener

app.listen(port, () => (console.log(`Server started on port : ${port}`)));