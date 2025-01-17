
import  { Router } from "express";
import Salao from "../models/salao.js";

const router = Router();


router.post('/', async (req,res) => {
    try {
        const salao = await new Salao(req.body).save();
        res.json({salao});
    } catch (err){
        res.json({error: true, message: err.message})
    }
});


export default router;
