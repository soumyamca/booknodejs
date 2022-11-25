var express = require('express');
var bodyparser = require('body-parser')
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

    res.json({"name":getName,"category":getCategory,"author":getAuthor,"price":getPrice})
})
app.listen(process.env.PORT||4000,()=>{
    console.log("server started at http://localhost:4000/read")
})
