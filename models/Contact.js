
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add name']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add email']
  },
  message: {
    type: String,
    trim: true,
    required: [true, 'Please add message']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', ContactSchema);