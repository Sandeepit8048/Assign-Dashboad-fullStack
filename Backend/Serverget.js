import express from "express";
import connectDB from "../Backend/mongoDB/mongose.js";  
import schema from "../Backend/module/Loginmd.js";
import cors from "cors";

connectDB();

const app = express();  
app.use(cors());
app.use(express.json());

app.get('/signup', async (req, res)=>{
     try{
        const signup = await schema.find();
        res.status(200).json(signup);
     } catch (error) {
        res.status(500).json({ message: "Error fetching signup data" });

     }
})


app.listen(2000, ()=>{
    console.log("Server is running on port 2000");
})