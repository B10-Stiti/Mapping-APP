const Shape = require('../model/shapeModel')
const mongoose = require('mongoose')
const CircleSchema = new mongoose.Schema({
    Radius: Number,
})
const Circle = Shape.discriminator(1,CircleSchema)
module.exports = Circle