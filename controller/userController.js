const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/userModel')
SignUp = async (req,res) => {
    try {
        const { FullName, Mail, DateOfBirth, Nationality, Password, ConfirmPassword } = req.body;
        if (Password !== ConfirmPassword) {
            return res.status(400).json({
              code: "API.signup.Failed",
              message: "Passwords do not match",
            })
        }
        const check_user = await User.findOne({ Mail: Mail });
        if (check_user) {
            return res.status(400).json({
            code: "API.signup.Failed",
            message: "User Already Exist",
          })
        }
        const hashedPassword = await bcrypt.hash(Password, 10)
        const user = await User.create({
            FullName : FullName, 
            Mail : Mail,
            DateOfBirth : DateOfBirth,
            Nationality : Nationality,
            Password : hashedPassword,
          });
        if (user) {
            return res.status(200).json({
                code: "API.signup.success",
                message: "user added successfully",
            });
        } else {
            return res.status(400).send("Failed to add User");
        }
    }catch (error) {
        res.status(500).send("Error during signup");
    }
}
Login = async (req,res) => {
    // authenticate user :
    const {Mail,Password} = req.body;
    try {
        const check_user = await User.findOne({ Mail: Mail });
        if (!(check_user)) {
            return res.status(400).json({
            code: "API.Login.Failed",
            message: "Invalid User",
          })
        }
        if (await bcrypt.compare(Password, check_user.Password)) {
             // authorization :
             const Token = jwt.sign({check_user},process.env.SECRET_KEY)
             res.json({
                code: "API.login.success",
                message: "user logged successFully",
                data: {
                    token: Token,
                    user: check_user
                }
             });
        }else {
            return res.status(400).json({
                code: "API.Login.Failed",
                message: "Wrong Password",
              })
        }
    }catch {
        res.status(500).send("erreur")
    }
}
module.exports = { Login, SignUp }