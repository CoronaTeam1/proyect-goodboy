const express = require('express');
const Dog = require('../models/Dog.model')
const uploadCloud = require('../configs/cloudinary.config')
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body)
  console.log(req.file)
  const { name, age, genre, breed, photo } = req.body;
  const newdog = {
    name,
    age,
    genre,
    breed,
    photo,
  }

  Dog.create(newdog)
    .then(newDog => res.json(newDog))
    .catch(error => console.log(error))
})

module.exports = router;
