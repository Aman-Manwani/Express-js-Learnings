const express = require('express');
const app =  express();
app.get('/',(req,res) => {
    res.send('hii here is aman manwani home page');
})
app.get('/about',(req,res) => {
    res.status(200).send('hii here is aman manwani about page');
})
app.get('/contact',(req,res) => {
    res.send('hii here is aman manwani contact page');
})
app.get('/temp',(req,res) => {
    res.send('hii here is aman manwani temporary page');
})

app.listen(8000,()=>{
    console.log('listening to port 8k');
})