const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary.config')

router.post('/upload', uploader.single("photo"), (req, res, next) => {

    console.log('Ha entrado en files.routes')

    if (!req.file) {
        next(new Error('No file uploaded!'))
        return
    }

    res.json({ secure_url: req.file.secure_url })
})

module.exports = router