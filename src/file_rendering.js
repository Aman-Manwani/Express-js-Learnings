const express = require('express');
const app=express();
const path = require('path');

//give the address of the folder
const staticPath = path.join(__dirname,'../public');
// console.log(__dirname);
//method to render the file on the html dom
//its a builtin middleware to render pages and files
app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("hello here is aman manwani");
})

app.get("/about",(req,res) =>{
    res.send("hello from the about page");
})

app.listen (8000,()=>{
    console.log("listening to port 8k");
})