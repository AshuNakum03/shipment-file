// models/File.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['file', 'directory'],
    required: true,
  },
  size: {
    type: Number,
    default: 0,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('File', fileSchema);
