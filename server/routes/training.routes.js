const express = require('express')
const router = express.Router()
// MODELS
const Training = require('../models/Training.model')

router.post('/', (req, res, next) => {
    const learn = req.body.learn
    Training.find({
            learn
        })
        .then(response => res.json(response))
        .catch(err => next(err));
})


module.exports = router