const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    FullName : {
        type : String,
        maxlength : 30
    },
    Mail :{
        type : String,
        maxlength : 30
    },
    DateOfBirth :{
        type : String,
        maxlength : 30
    },
    Nationality :{
        type : String,
        maxlength : 30
    },
    Password : {
        type : String,
        minlength : 8
    }
})
module.exports = mongoose.model("User",userSchema)