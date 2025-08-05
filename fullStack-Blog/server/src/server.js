import mongoose from "mongoose";
import express from 'express'
import { connectDb } from './config/db.js';
import userRoute from './Routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



const app = express()
app.get('/', (req, res) => {
    res.send("Hello World") 
})

app.use(express.json());
app.use(cookieParser());    
app.use(cors({
    origin: "*",}));
connectDb();


app.use('api/v1/user',userRoute);




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});