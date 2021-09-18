const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("GOOD")
})

app.listen(PORT,(e)=>{
    e ? console.log("Something went wrong") : console.log("Server is running");
})