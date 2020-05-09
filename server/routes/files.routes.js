const express = require('express')
const router = express.Router()
//CLOUDINARY
const uploader = require('../configs/cloudinary.config')

router.post('/', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'))
        return
    }

    res.json({ secure_url: req.file.secure_url })
})

module.exports = router