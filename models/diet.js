const mongoose = require('mongoose')

const dietSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long']
      // unique: true
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Diet', dietSchema)
