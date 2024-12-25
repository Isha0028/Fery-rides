import mongoose from "mongoose";

const connectToMongodb= async()=>{
    try {
        await mongoose.connect(process.env.Mongodb_URI);
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
}

export default  connectToMongodb; 