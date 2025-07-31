import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup=async (req,res,next)=>{
    // console.log(req.body);
    const {username,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashPassword});
    try {
        await newUser.save();
        res.status(201).json("User Created Successfully!")
    } catch (error) {
        next(error);
        // res.status(500).json(error.message);
        // next(errorHandler(550,'error from the function'));
    }
};