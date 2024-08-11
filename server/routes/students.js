const express=require("express")
const router=express.Router()
const student =require("../models/student")

router.get("/",(req,res)=>{
    res.send("Student router")
})

module.exports=router