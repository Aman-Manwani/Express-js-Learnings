// middlewares are of three types inbuilt,custom middlewares from third parties

const express=require('express')
const app =express();
const cors=require('cors');

const PORT =process.env.PORT || 8000;
// built-in middleware to handle urlencoded data 
//  in other words , form data 
//  'content-type:application'
app.use(express.urlencoded({extended:false}));

//builtin middleware for json
app.use(express.json);

//for routing from other file to expand appication through url
app.use('/rout',require('./Routing'));

app.use('/employees',require('./employees'));



//serving files method through express.static is also an middleware 


//custom middleware logger
const logger = (req,res,next)=>{
    const method = req.method;
    const url =req.url;
    const date=new Date().getFullYear();
    console.log(method,url,date);
    next();
};
app.get('/middle',logger,(req,res)=>{
    res.send('Home Page');
})

app.use(logger);
// APP.USE can be used to attach logger to multiple request handlers if there are many and hard to write logger manually

// app.use will work onlt for gets undder  it
// app.use(logger);
// another way
// app.use('/api', logger); i.e. providing a specific url path as argument

//if we are getting cors error then we have to import cors npm package then import it in the file to remove the error
app.use(cors());

//to get the preffered type of browser error
 app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.send('path_of_the_error_page');
    }else if(req.accepts('json')){
        res.json({error:"404 not found"});
    }else{
        res.type('txt').send("404 not found");
    }
})

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})