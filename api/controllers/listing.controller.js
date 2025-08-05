import Listing from "../models/listining.model.js";

export const createListing=async(req,res,next)=>{

    try {
        const listining=await Listing.create(req.body);
        return res.status(201).json(listining);
    } catch (error) {
        next(error);
    }
}