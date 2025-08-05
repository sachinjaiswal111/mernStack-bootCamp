import { Router } from "express";
import { register } from "../Controller/user.controller.js";

const userRoute = Router();
userRoute.get('/get',(req,res)=>{
    res.send('hello world')
})
userRoute.post('/register', register);

export default userRoute;