// Imports
import express from "express";
import mongoose from "mongoose";
import {connection_url} from "./database.js";
import Projects from "./dbProjects.js";

// App Config
const app = express();
const port = 3000 || process.env.PORT;

// Middlewares
app.use(express.json());

// DB config
mongoose.connect(connection_url, { 
    useNewUrlParser: true,
    useUnifiedTopology : true
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Heyyy !"));


app.get("/projects", (req , res) => {
    Projects.find( (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});

app.post("/projects", (req, res) => {
    const dbProjects = req.body;

    Projects.create(dbProjects, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});

// Listener

app.listen(port, () => (console.log(`Server started on port : ${port}`)));