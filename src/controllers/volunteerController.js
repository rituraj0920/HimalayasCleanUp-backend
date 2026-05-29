const volunteerModel = require('../models/Volunteer');


const jwt =require('jsonwebtoken');

require('dotenv').config();

//   fullName: '',
//       email: '',
//       phone: '',
//       region: '',
//       motivation: ''

async function registerVolunteer(req, res) {
  try {
    const { fullName, email, phone, region, motivation } = req.body;

    const isUserAlreadyExists = await volunteerModel.findOne({ email });

    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = await volunteerModel.create({
      fullName,
      email,
      phone,
      region,
      motivation
    });

    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {
    console.error(error); // <-- Actual error terminal me print hoga

    res.status(500).json({
      message: error.message
    });
  }
}

module.exports={
    registerVolunteer
}