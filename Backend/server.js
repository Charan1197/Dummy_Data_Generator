import mongoose from "mongoose";
import express from "express";
import { faker } from "@faker-js/faker";
import { DummyData } from "./model/dataGenerator.js";
import cors from "cors";
import  dotenv  from "dotenv";
dotenv.config();


const app = express();
const port = 3000;


app.use(cors({}));



const mongoURI = process.env.MONGO_URI;


//Database connection 
try {
  await mongoose.connect(mongoURI);
  console.log("MongoDB connected");
} catch (err) {
  console.error("Connection error:", err);
}

mongoose.set("debug", true);

app.get("/api", async (req, res) => {
    const collectionName = "dummydata"
    try {
        let employees = [];
            await DummyData.deleteMany({})

            for (let i = 0; i < 10; i++) {
               
                const employeeData = {
                    name: faker.person.fullName(),
                    salary: parseInt(faker.finance.amount({ min: 30000, max: 200000, dec: 0 })),
                    Email: faker.internet.email(),
                    city: faker.location.city(),
                    language: faker.helpers.arrayElement(["Python", "JavaScript", "C", "Java"]),
                    isManager: faker.datatype.boolean()
                };

                employees.push(employeeData);
            }

            const inserted = await DummyData.insertMany(employees);
 
            res.json(inserted);
       
    } catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ error: "Failed to insert data" });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
