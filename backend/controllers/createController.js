const express = require("express")
const dbModel = require('../dbModel')
const router = express.Router()
router.post("/createNote",async(req,res)=>{
    const {title,content} = req.body
    try {

        const note = new dbModel({title,content,date: Date.now()})
        await note.save()
        res.status(201).json({ message: "New Pizza Added Successfully" });
        
    } catch (error) {
        console.error("Error adding pizza:", error);
        return res.status(400).json({ message: "Failed to add pizza", error });
    }
})
router.get("/getnotes",async(req,res)=>{
    try {
        const notes = await dbModel.find({})
        res.send(notes)
        
    } catch (error) {
        console.error("Error adding pizza:", error);
        return res.status(400).json({ message: "Failed to add pizza", error });
        
    }
})
router.post("/deletenote",async(req,res)=>{
    try {
        await dbModel.findByIdAndDelete(req.body.id)
        res.status(201).json({message : "note deleted"})
    } catch (error) {
        res.status(400).json({message : error})
    }
})
module.exports = router