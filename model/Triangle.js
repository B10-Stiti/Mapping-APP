const Shape = require('../model/shapeModel')
const mongoose = require('mongoose')
const TriangleSchema = new mongoose.Schema({
    Latlngs: String,
    BaseLength: Number,
    Height : Number
})
const Triangle = Shape.discriminator(5,TriangleSchema)
module.exports = Triangle