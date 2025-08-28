import express from "express";
import { createListing , deletelisting,updateListing,getListing,getListings} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router();

router.post('/create',createListing);
router.get('/',(req,res)=>{
    res.json("done")
});
router.delete('/delete/:id',verifyToken,deletelisting);
router.post('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListing);
router.get('/get', getListings);



export default router;