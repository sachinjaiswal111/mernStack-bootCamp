import mongoose from "mongoose";

export  const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://sachin123:sachin123@cluster1.agxmksj.mongodb.net/blog");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}
