const express = require('express');
const router = express.Router();
// MODELS
const User = require('../models/User.model')

router.post('/', (req, res, next) => {
  const { name, age, genre, breed, photo } = req.body;
  const newdog = {
    name,
    age,
    genre,
    breed,
    photo,
  }

  User.findByIdAndUpdate(req.user._id,{dog:newdog})
    .then(newDog => res.json(newDog))
    .catch(error => next(error))
})


module.exports = router;
