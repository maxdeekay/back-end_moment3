// dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// init express
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/cv").then(() => {
    console.log("Connected to MongoDB...");
}).catch((error) => {
    console.log("Error connecting to database: " + error);
});

// experience schema
const ExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Du måste ange ett företagsnamn."]
    },
    jobtitle: {
        type: String,
        required: [true, "Du måste ange en jobtitel."]
    },
    location: {
        type: String,
        required: [true, "Du måste ange en plats."]
    },
    description: {
        type: String,
        required: false
    }
});

const Experience = mongoose.model("Experience", ExperienceSchema);

// routing
app.get("/api", async (req, res) => {
    res.json({message: "Welcome to this API"});
});

// get all work experiences
app.get("/experiences", async(req, res) => {
    try {
        const result = await Experience.find({});
        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});

// add work experience
app.post("/experiences", async(req, res) => {
    try {
        const result = await Experience.create(req.body);
        return res.json({message: "Erfarenhet tillagd."});
    } catch(error) {
        return res.status(400).json({ message: "Företag, titel och plats krävs." });
    }
});

// delete from database
app.delete("/experiences/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Experience.findByIdAndDelete(id);

        if (result) {
            res.status(200).send("Document with id ${id} was deleted");
        } else {
            res.status(404).send("Document with id ${id} was not found.")
        }
    } catch(error) {
        return res.status(500).json(error);
    }
});

// start server
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});