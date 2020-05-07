const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')
const axios = require('axios').default
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
        .catch(err => console.log(err));
})

router.post('/details', (req, res, next) => {
    const breedName = req.body.breed
    console.log('breedName:', breedName)
    Breeds.find({
        name: breedName
    })
        .then(response => {
            console.log('resssss:', response)
            return response[0].description ? response : breedsAPI.getDetails(breedName)
        })
        .then(response => { console.log('res22:', response); res.json(response) })
        .catch(error => console.log(error))
})


module.exports = router