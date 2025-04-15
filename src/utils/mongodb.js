import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config.js";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mithileshdeore7:iD44NyRfhoHdyazx@mdcluster.skeg8d8.mongodb.net/dt");
        console.log("MongoDB is connected successfully");
    } catch (err) {
        console.error("Error while connecting to mongodb:", err.message);
        process.exit(1);
    }
};
