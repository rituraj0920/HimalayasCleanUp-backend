const mongoose = require('mongoose');



const volunteerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  motivation: {
    type: String,
    required: true,
  },
});

const volunteerModel = mongoose.model('volunteers', volunteerSchema);

module.exports = volunteerModel;