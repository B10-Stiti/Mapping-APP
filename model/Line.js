const Shape = require('../model/shapeModel')
const mongoose = require('mongoose')
const LineSchema = new mongoose.Schema({
    StartPoint: String,
    EndPoint: String
})
const Line = Shape.discriminator(2,LineSchema)
module.exports = Line