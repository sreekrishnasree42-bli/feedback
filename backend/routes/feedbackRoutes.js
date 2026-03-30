const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.get("/",async (req,res) => {
    const data =await Feedback.findAll();
    res.json(data);
})
router.post("/",async (req,res) => {
    const data = await Feedback.create(req.body);
    res.json(data);
})
router.put("/:id", async (req,res) => {
    const data = await Feedback.findByIdAndUpdate(req.params.id,req.body, {new:true});
    res.json(data);
})
router.delete("/:id", async (req,res) => {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"});
})

module.exports = router;