import express from "express";
import { createListing , deletelisting} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router();

router.post('/create',createListing);
router.get('/',(req,res)=>{
    res.json("done")
});
router.delete('/delete/:id',verifyToken,deletelisting);



export default router;