import express from "express";
import connectDB from "../Backend/mongoDB/mongose.js";
import schema from "../Backend/module/Loginmd.js";
import { connect } from "mongoose";
import cors from "cors";

connectDB();

const app = express();  
app.use(cors());


app.use(express.json());

app.post("/login", async (req, res)=>{
    try{
        const {name, password, email, phone} = req.body;
        const  username = new schema({
            name, 
            password,
            email,
            phone
        });
        await username.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });

    }

})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});
