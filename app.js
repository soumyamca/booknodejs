var express = require('express');
var bodyparser = require('body-parser')
var mongoose = require('mongoose');
var {bookModel}=require('./models/bookModel')
var app = express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/',(req,res)=>{
    res.send("welcome to my website")
})
app.post('/read',(req,res)=>{
    var getName=req.body.bookname;
    var getCategory=req.body.cat;
    var getAuthor=req.body.author;
    var getPrice=req.body.price;
    var bookObject=new bookModel(req.body);

    res.json(bookObject)
})
app.listen(process.env.PORT||7000,()=>{
    console.log("server started at http://localhost:7000/read")
})
