const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'Proyect-GoodBoy', // The name of the folder in cloudinary
    allowedFormats: ['jpg', "jpeg", 'png'],
    filename: function (req, res, cb) {
        cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
    }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;