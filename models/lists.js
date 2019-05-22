var mongoose=require("mongoose");

var listSchema= new mongoose.Schema({
    title:{type:String,required:true},
    created:{type:Date,default:Date.now},
    description:String,
    todo:{
        id:mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    },
    color:"String"
})