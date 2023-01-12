const express = require('express');
const app = express();

//route handlers
// app.get('/hello',(req,res,next)=>{
//     console.log('attempted to load hello file');
//     next()
// },(req,res)=>{
//     res.send('hello world');
// })

const one = (req,res,next)=>{
    console.log('one');
    next();
}
const two = (req,res,next)=>{
    console.log('two');
    next();
}
const three = (req,res,next)=>{
    console.log('three');
    res.send('welcome');
}


// to get these route handlers in chain 
app.get('/tut',[one,two,three]);

app.listen(8000,()=>{
    console.log('listening to port 8k');
})