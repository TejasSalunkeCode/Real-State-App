import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
 
export const signup=async (req,res,next)=>{
    // console.log(req.body);
    const {username,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashPassword});
    try {
        await newUser.save();
        res.status(201).json("User Created Successfully!")
    } catch (error) {
        return next(error);
        // res.status(500).json(error.message);
        // next(errorHandler(550,'error from the function'));
    }
};
        console.log("check try block");

export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'User not found!'))
        }
        // const validPassword=bcryptjs.compareSync(password,validUser.password);
        const validPassword= bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            console.log("check try block");
            return next(errorHandler(401,'Invalid Credentials'))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password : pass,...rest}=validUser._doc;
        res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest);
        
        
    }catch(error){
        console.log("check catch block");
       return next(error);
    }
}