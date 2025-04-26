import mongoose from "mongoose";
import express from "express";
import { dummyData } from "./model/dataGenerator.js";
import cors from "cors";
// import dotenv from "dotenv";
import  dotenv  from "dotenv";
dotenv.config();


const app = express();
const port = 3000;
app.use(cors());

const mongoURI = process.env.MONGO_URI;


//Database connection 
await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

// Dummy data arrays
let data = {
    name: ["Charan", "Ritesh", "Harry"],
    languages: ["Python", "Javascript", "C"],
    city: ["Hyderabad", "Mumbai", "Banglore"],
    isManager: [true, false]
};

// Routes
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.get("/", async (req, res) => {
    const collectionName = "dummydatas"
    try {
        let employees = [];
        const collections = await mongoose.connection.db.listCollections({ name: collectionName }).toArray();
        if (collections.length > 0) {
            await mongoose.connection.db.dropCollection(collectionName);
            res.send(`🗑️ Collection "${collectionName}" dropped.`);
        } else {
            console.log(`📂 Collection "${collectionName}" does not exist. Creating a new one.`);

            for (let i = 0; i < 10; i++) {
                let randomNum = Math.floor(Math.random() * 3); // 0 to 2
                let randomManager = Math.floor(Math.random() * 2); // 0 or 1

                let salary = Math.floor(Math.random() * 1000000);

                const employeeData = {
                    name: data.name[randomNum],
                    salary: salary,
                    language: data.languages[randomNum],
                    city: data.city[randomNum],
                    isManager: data.isManager[randomManager]
                };

                employees.push(employeeData);
            }

            const inserted = await dummyData.insertMany(employees);
            console.log("Inserted:", inserted);
            res.json(inserted);
        }
    } catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ error: "Failed to insert data" });
    }
});



// Start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
