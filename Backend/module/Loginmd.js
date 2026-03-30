import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    name:String,
    password:String,
    phone:Number,
    email:String,
    
})

const schema = mongoose.model("user",usermodel);
export default schema;