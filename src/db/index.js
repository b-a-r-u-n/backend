import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";


const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
        console.log("Connected to MongoDB !! DB HOST:",connectionInstance.connection.host);
    } catch (error) {
        console.log("mongodb connection error",error)
    }
}

export default connectDb;