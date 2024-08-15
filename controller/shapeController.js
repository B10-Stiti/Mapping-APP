const Circle = require('../model/Circle')
const Line = require('../model/Line')
const PoLygon = require('../model/PoLygon')
const Square = require('../model/Square')
const Triangle = require('../model/Triangle')
const Polygon = require('../model/PoLygon')

CreateShape =  async (req,res) => {
    const {userId,Type,Fill_color,border_Color,Description,ToolTips} = req.body
    let shapeData, shape
    switch (Type) {
      case 1:
        const Radius = req.body.Radius
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,Radius}
        shape = new Circle(shapeData)
        break
      case 2:
        const StartPoint = req.body.StartPoint
        const EndPoint = req.body.EndPoint
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,StartPoint,EndPoint}
        shape = new Line(shapeData)
      break
      case 3:
        const Points = req.body.Points
        const Sides = req.body.Sides
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,Points,Sides}
        shape = new PoLygon(shapeData)
        break
      case 4:
        const LatlngsS = req.body.Latlngs
        const EdgeCount = req.body.EdgeCount
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,LatlngsS,EdgeCount}
        shape = new Square(shapeData)
        break
      case 5:
        const LatlngsT = req.body.Latlngs
        const BaseLength = req.body.BaseLength
        const Height = req.body.Height
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,LatlngsT,BaseLength,Height}
        shape = new Triangle(shapeData)
        break
      default:
        return res.status(400).json({
            code: "API.Update.InvalidType",
            message: "Invalid shape type"
        });
    }
    await shape.save();
    if (shape) {
        return res.status(200).json({
            code: "API.Create.success",
            message: "Shape Created successfully",
            shape : shape
        })
    }else {
        return res.status(200).json({
            code: "API.Create.Failed",
            message: "Shape Already Exist",
        })
    }
}

ReadShape =  async (req,res) => {
    const {id} = req.params 
    const { Type } = req.body;
    switch (Type) {
      case 1:
        ShapeModel = Circle
        break
      case 2:
        ShapeModel = Line
        break
      case 3:
        ShapeModel = Polygon
        break
      case 4:
        ShapeModel = Square
        break
      case 5:
        ShapeModel = Triangle
        break
      default:
        return res.status(400).json({
            code: "API.Read.InvalidType",
            message: "Invalid shape type"
        });
    }
    const shape = await ShapeModel.findOne({_id : id})
    if (shape) {
        return res.status(200).json({
            code: "API.Read.success",
            message: "Shape Read successfully",
            shape: shape
        })
    }else {
        return res.status(400).json({
            code: "API.Read.Failed",
            message: "Failed to Read shape",
        })
    }
}

UpdateShape =  async (req,res) => {
    const {userId,Type,Fill_color,border_Color,Description,ToolTips} = req.body
    const {id} = req.params
    let shapeData
    switch (Type) {
      case 1:
        const Radius = req.body.Radius
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,Radius}
        ShapeModel = Circle
        break
      case 2:
        const StartPoint = req.body.StartPoint
        const EndPoint = req.body.EndPoint
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,StartPoint,EndPoint}
        ShapeModel = Line
        break
      case 3:
        const Points = req.body.Points
        const Sides = req.body.Sides
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,Points,Sides}
        ShapeModel = Polygon
        break
      case 4:
        const LatlngsS = req.body.Latlngs
        const EdgeCount = req.body.EdgeCount
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,LatlngsS,EdgeCount}
        ShapeModel = Square
        break
      case 5:
        const LatlngsT = req.body.Latlngs
        const BaseLength = req.body.BaseLength
        const Height = req.body.Height
        shapeData = {userId,Type,Fill_color,border_Color,Description,ToolTips,LatlngsT,BaseLength,Height}
        ShapeModel = Triangle
        break
      default:
        return res.status(400).json({
            code: "API.Update.InvalidType",
            message: "Invalid shape type"
        });
    }
    const shape = await ShapeModel.findByIdAndUpdate(id,shapeData)
    if (shape) {
        return res.status(200).json({
            code: "API.Update.success",
            message: "Shape Updated successfully",
            shape: shape
        })
    }else {
        return res.status(400).json({
        code: "API.Read.Failed",
        message: "Failed to Update shape",
        })
    }
}

DeleteSHape =  async (req,res) => {
    const {id} = req.params
    const { Type } = req.body;
    switch (Type) {
      case 1:
        ShapeModel = Circle
        break
      case 2:
        ShapeModel = Line
        break
      case 3:
        ShapeModel = Polygon
        break
      case 4:
        ShapeModel = Square
        break
      case 5:
        ShapeModel = Triangle
        break
      default:
        return res.status(400).json({
            code: "API.Update.InvalidType",
            message: "Invalid shape type"
        });
    }
    const shape = await ShapeModel.findByIdAndDelete(id)
    if (shape) {
        return res.status(200).json({
            code: "API.Delete.success",
            message: "Shape Deleted successfully",
        })
    }else {
        return res.status(400).json({
        code: "API.Read.Failed",
        message: "Failed to Delete shape",
        })
    }
}

module.exports = { CreateShape, ReadShape, UpdateShape, DeleteSHape }