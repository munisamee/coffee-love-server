const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cloudinaryUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);
