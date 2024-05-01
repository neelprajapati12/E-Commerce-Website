const port = 4000
const express = require('express')
const mongoose=require('mongoose')
const jwt=require("jsonwebtoken")
const path = require("path")
const cors=require("cors")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/login")

app.get("/",(req,res)=> {
    res.send("Express App is runnning")
})

const Users = mongoose.model("Users",{
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String
    }
})

app.post('/signup',async (req,res) => {
    let check = await Users.findOne({email:req.body.email})
    if(check) {
        return res.status(400).json({success:false,errors:"existing user found with same email"})
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    await user.save()

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom')
    res.json({success:true,token})
})

app.post('/login',async(req,res) => {
    let user = await Users.findOne({email:req.body.email})
    if(user) {
        const passCompare = req.body.password === user.password
        if(passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        } 
        else {
            res.json({success:false,errors:"wrong password"})
        }
    }
    else{
        res.json({success:false,errors:"wrong email"})
    }
})

app.listen(port, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("Server running successfully")
    }
})
