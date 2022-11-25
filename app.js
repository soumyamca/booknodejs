var express = require('express');
var bodyparser = require('body-parser')
var app = express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.post('/read',(req,res)=>{
    var getName=req.body.name ;
    var getCategory=req.body.cat;
    var getAuthor=req.body.author;
    var getPrice=req.body.price;

    res.send(getName+"",getCategory+"",getAuthor+"",getPrice)
})
app.listen(3005,()=>{
    console.log("server started at http://localhost:3005/read")
})
