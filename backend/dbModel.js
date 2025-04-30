const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title : {type:String,required:true},
    content : {type:String,required:true},
    date:{type:Number,required:true}
},{
    timestamps:true
})
const notesModel = mongoose.model("note",notesSchema)
module.exports = notesModel