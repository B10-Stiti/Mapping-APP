const mongoose = require('mongoose')
const Shape = require('./shapeModel')
const SquareSchema = new mongoose.Schema({
    Latlngs: String,
    EdgeCount: Number
})
const Square = Shape.discriminator(4,SquareSchema)
module.exports = Square