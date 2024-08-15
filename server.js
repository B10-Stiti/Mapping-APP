require('dotenv').config(); 
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test");
// const authenticateToken = require('./authToken')
const { Login, SignUp } = require('./controller/userController')
const { CreateShape, ReadShape, UpdateShape, DeleteSHape } = require('./controller/shapeController')
const app = express()
app.use(express.json())
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

// Sign Up
app.post('/signup', async (req,res) => {
    SignUp(req,res)
})
// Login
app.post('/login',async (req,res) => {
    Login(req,res)
})
// CRUD :
app.post('/create',async (req,res) => {
    CreateShape(req,res)
})

app.get('/read/:id',async (req,res) => {
    ReadShape(req,res)
})

app.post('/update/:id',async (req,res) => {
    UpdateShape(req,res)
})

app.post('/delete/:id',async (req,res) => {
    DeleteSHape(req,res)
})


app.listen(3000)