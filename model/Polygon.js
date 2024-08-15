const Shape = require('../model/shapeModel')
const mongoose = require('mongoose')
const PolygonSchema = new mongoose.Schema({
    Points: String,
    Sides: Number
})
const Polygon = Shape.discriminator(3,PolygonSchema)
module.exports = Polygon