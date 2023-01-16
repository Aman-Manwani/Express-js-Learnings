const express =require('express');

const app = express();

app.listen(3000);

app.use(express.json());

let users = {};

app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    users = req.body;
    res.json({
        message:"data received successfully",
        user:req.body
    });
})

// patch->update 
app.patch('/users',(req,res)=>{
    console.log(req.body);
    for(key in req.body)
    {
        users[key]= req.body[key];
    }
    res.json({
        message:"data updated succcessfully"
    })
})

app.delete('./users',(req,res)=>{
    users ={};
    res.json({
        message:"data deleted successfully"
    })
})