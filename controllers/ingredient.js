const Ingredient = require('../models/ingredient')
const Product = require('../models/product')
const slugify = require('slugify')

exports.create = async (req, res) => {
  try {
    const { name } = req.body
    // const category = await new Ingredient({ name, slug: slugify(name) }).save();
    // res.json(category);
    res.json(await new Ingredient({ name, slug: slugify(name) }).save())
  } catch (err) {
    // console.log(err);
    res.status(400).send('Create ingredient failed')
  }
}

exports.list = async (req, res) =>
  res.json(await Ingredient.find({}).sort({ createdAt: -1 }).exec())

exports.read = async (req, res) => {
  const ingredient = await Ingredient.findOne({ slug: req.params.slug }).exec()
  // res.json(ingredient);
  const products = await Product.find({ ingredient }).populate('ingredient').exec()

  res.json({
    ingredient,
    products
  })
}

exports.update = async (req, res) => {
  const { name } = req.body
  try {
    const updated = await Ingredient.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    )
    res.json(updated)
  } catch (err) {
    res.status(400).send('Ingredient update failed')
  }
}

exports.remove = async (req, res) => {
  try {
    const deleted = await Ingredient.findOneAndDelete({ slug: req.params.slug })
    res.json(deleted)
  } catch (err) {
    res.status(400).send('Ingredient delete failed')
  }
}
