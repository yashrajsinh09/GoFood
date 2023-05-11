const { default: mongoose } = require('mongoose');
const monfoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,requied:true},
    location:{type:String,requied:true},
    email:{type:String,requied:true},
    password:{type:String,requied:true},
    date:{type:Date,default:Date.now},

})

module.exports=mongoose.model('user',userSchema) 