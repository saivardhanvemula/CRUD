const express = require("express");
const router = express.Router();
const student = require("../models/student");
router.use(express.json());
router.get("/", async(req, res) => {
    const data = await student.find({},{name:1,_id:0});
    console.log(data);
    res.send(data);
});

router.get("/:roll", async (req, res) => {
    let roll = req.params.roll;
    console.log("Getting details of", roll);
    try {
        const data = await student.findOne({ roll: roll });
        res.send(data);
    } catch (e) {
        res.send(e);
    }
});
router.post("/", async (req, res) => {
    const s1 = new student({
        name: req.body.name,
        class: req.body.class,
        roll: req.body.roll,
        gender:req.body.gender
    });
    try {
        const s = await s1.save();
        res.send(s);
    } catch (e) {
        res.send(e);
    }
});
router.delete("/:roll", async (req, res) => {
    const roll = req.params.roll;
    console.log("deleting details of", roll);
    try {
        const s = await student.deleteOne({roll});
        if(s.deletedCount==0)res.send("no student found with roll no"+roll)
        else res.send(s)
    } catch (e) {
        res.send(e);
    }
    // res.send(roll);
});
router.patch("/:roll/:class",async(req,res)=>{
    const roll = req.params.roll;
    const newClass = req.params.class; 
    console.log(newClass, roll);
    
    try {
        const updatedStudent = await student.findOneAndUpdate(
            { roll: roll },      
            { class: newClass }, 
            { new: true }        
        );
        if (!updatedStudent) {
            return res.status(404).send("Student not found");
        }

        res.status(200).send(updatedStudent);
    } catch (error) {
        res.send(error)
    }
})
module.exports = router;
