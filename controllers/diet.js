const Diet = require('../models/diet')
const Product = require('../models/product')
const slugify = require('slugify')
const diet = require('../models/diet')

exports.create = async (req, res) => {
  try {
    const { name } = req.body
    // const category = await new Diet({ name, slug: slugify(name) }).save();
    // res.json(category);
    res.json(await new Diet({ name, slug: slugify(name) }).save())
  } catch (err) {
    // console.log(err);
    res.status(400).send('Create diet failed')
  }
}

exports.list = async (req, res) =>
  res.json(await Diet.find({}).sort({ createdAt: -1 }).exec())

exports.read = async (req, res) => {
  const diet = await Diet.findOne({ slug: req.params.slug }).exec()
  // res.json(brand);
  const products = await Product.find({ diet }).populate('diet').exec()

  res.json({
    diet,
    products
  })
}

exports.update = async (req, res) => {
  const { name } = req.body
  try {
    const updated = await Diet.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    )
    res.json(updated)
  } catch (err) {
    res.status(400).send('Diet update failed')
  }
}

exports.remove = async (req, res) => {
  try {
    const deleted = await Diet.findOneAndDelete({ slug: req.params.slug })
    res.json(deleted)
  } catch (err) {
    res.status(400).send('Diet delete failed')
  }
}
