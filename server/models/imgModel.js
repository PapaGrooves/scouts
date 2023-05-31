// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  imageData: Buffer,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;