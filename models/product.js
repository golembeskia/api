const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 40,
      text: true
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true
    },
    manufacturing: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true
    },
    allergy: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    calories: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    carbohydrates: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    fat: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    protein: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    transfat: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    cholesterol: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    sodium: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    sugar: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    servingsize: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    saturatedfat: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    dietaryfiber: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    category: {
      type: ObjectId,
      ref: 'Category'
    },
    subs: [
      {
        type: ObjectId,
        ref: 'Sub'
      }
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0
    },
    images: {
      type: Array
    },
    shipping: {
      type: String,
      enum: ['Yes', 'No']
    },
    color: {
      type: String,
      enum: ['Black', 'Brown', 'Silver', 'White', 'Blue']
    },
    brand: {
      type: ObjectId,
      ref: 'Brand'
    },
    diet: [
      {
        type: ObjectId,
        ref: 'Diet'
      }
    ],
    ingredient: [
      {
        type: ObjectId,
        ref: 'Ingredient'
      }
    ],
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: 'User' }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
