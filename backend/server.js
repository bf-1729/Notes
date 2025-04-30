const express = require("express")
const cors = require("cors")
const createNote = require("./controllers/createController")
const port = 7000

const connectDB = require("./mongodb")

const app = express()
connectDB()

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/",createNote)

app.get("/",(req,res)=>{
    res.send("server running")
})

app.listen(port,()=>{
    console.log("server running");
    
})