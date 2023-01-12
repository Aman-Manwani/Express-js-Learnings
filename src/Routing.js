const express = require('express');
const router = express.Router();
const path=require('path');

router.get('/index',(req,res)=>{
    res.send('index file');
})
router.get('/test',(req,res)=>{
    res.send('test file');
})

module.exports = router;