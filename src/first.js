const express = require('express');
const path = require('path')
const app = express();

app.get("/",(req,res) => {
    res.send("hello here is aman manwani");
});

app.get("/about",(req,res) => {
    res.send("hello here is about page aman manwani");
});
//to send a file to the server
// app.get('/waste',(req,res)=>{
//     res.sendFile(path.join(address of the file));
// })

//if we want the file which is not present then he automatically send this file
// but it gives the status code 200 so we have to change it 
// app.get('/*',(rq,res)=>{
//     res.sendFile(404 file address);
// })

app.listen(8000,() => {
    console.log('listening to port 8k');
})