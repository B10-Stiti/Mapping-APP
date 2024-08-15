const mongoose = require('mongoose')
const shapeSchema = new mongoose.Schema({
    userId : Number,
    Type : {
        type : Number,
        required : true,
    },
    Fill_color: String,
    border_Color : String,
    Description: String,
    ToolTips : String,
}, { discriminatorKey: 'Type' });
module.exports = mongoose.model("Shape",shapeSchema)