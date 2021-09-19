const express = require("express")
const app = express()
const PORT = 3000
const server = app.listen(PORT,(e)=>{
    e ? console.log("Something went wrong") : console.log("Server is running");
})

const socket = require("socket.io")
const io = socket(server)

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.sendFile("/index.html")
})

io.on("connection",(socket)=>{
    console.log("Socket connected",socket.id);
    socket.on("chat",(data)=>{
        socket.broadcast.emit("chat",data)
    })

    socket.on("typing",(name)=>{
        console.log(name);
        socket.broadcast.emit("typing",`<p><em>${name} is typing...</em></p>`)
    })
})


