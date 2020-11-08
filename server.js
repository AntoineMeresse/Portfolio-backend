// Imports
import express from "express";
import mongoose from "mongoose";
import {connection_url} from "./database.js";
import Projects from "./schemas/dbProjects.js";
import SkillCards from "./schemas/dbSkillCard.js";
import cors from 'cors';

// App Config
const app = express();
const port = 3000 || process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

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

app.get("/skillcards", (req , res) => {
    SkillCards.find( (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});

app.post("/skillcards", (req, res) => {
    const dbSkillCards = req.body;

    SkillCards.create(dbSkillCards, (err, data) => {
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