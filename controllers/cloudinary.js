const cloudinary = require('cloudinary').v2

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// req.files.file.path
exports.upload = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `ecomm/${Date.now()}`,
    resource_type: 'auto' // jpeg, png
  })
  res.json({
    public_id: result.public_id,
    url: result.secure_url
  })
}

exports.remove = (req, res) => {
  const image_id = req.body.public_id

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err })
    res.send('ok')
  })
}
