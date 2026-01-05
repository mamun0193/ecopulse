import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
    if (isConnected) return;
    
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
        isConnected = true;
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Database connection failed!', error);
    }
}

export default dbConnect;