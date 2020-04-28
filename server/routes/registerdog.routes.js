const express = require('express');
// const Dog = require('../models/Dog.model')
const User = require('../models/User.model')
const uploadCloud = require('../configs/cloudinary.config')
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body)
  const { name, age, genre, breed, photo } = req.body;
  console.log(req.user._id+'AAAAA')
  const newdog = {
    name,
    age,
    genre,
    breed,
    photo,
  }

  User.findByIdAndUpdate(req.user._id,{dog:newdog})
    .then(newDog => res.json(newDog))
    .catch(error => console.log(error))
})


module.exports = router;
