const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.sendFile("/index.html")
})

app.listen(PORT,(e)=>{
    e ? console.log("Something went wrong") : console.log("Server is running");
})