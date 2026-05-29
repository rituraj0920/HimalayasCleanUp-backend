const volunteerModel = require('../models/Volunteer');


const jwt =require('jsonwebtoken');

require('dotenv').config();

//   fullName: '',
//       email: '',
//       phone: '',
//       region: '',
//       motivation: ''


async function registerVolunteer(req, res){
    const {fullName, email , phone,region,motivation}= req.body;

    const isUserAlreadyExists = await volunteerModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exists"
        })
    }
     const user =await volunteerModel.create({
        fullName,
        email,
        phone,
        region,
        motivation
    })
    res.status(201).json({
        message:"user registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName: user.fullName
        }
    })
   
}

module.exports={
    registerVolunteer
}