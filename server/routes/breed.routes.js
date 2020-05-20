const express = require('express')
const router = express.Router()
//MODELS
const Breeds = require('../models/Breeds.model')
const breedsAPIHandler = require('../services/breedsAPIHandler')


const breedsAPI = new breedsAPIHandler()

router.post('/', (req, res, next) => {
    const index = req.body.index
    Breeds.find({
        index: index
    })
        .then(response => response.length ? response : breedsAPI.getBreeds(index))
        .then(response => res.json(response))
        .catch(err => next(err));
})

router.post('/details', (req, res, next) => {
    const breedName = req.body.breed
    Breeds.find({
        name: breedName
    })
        .then(response => {
            return response[0].description ? response : breedsAPI.getDetails(breedName)
        })
        .then(response => { console.log('res22:', response); res.json(response) })
        .catch(error => next(error))
})


module.exports = router