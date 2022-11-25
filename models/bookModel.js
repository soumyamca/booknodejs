var mongoose = require('mongoose');
var bookSchema=new mongoose.Schema(
    {
        bookname:{type:String,require:true},
        category:{type:String,require:true},
        author:{type:String,require:true},
        price:{type:String,require:true},

    }

);
var bookModel=mongoose.model('books',bookSchema);
module.exports={bookModel}