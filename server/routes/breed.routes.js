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
        .then(elm => elm.length ? elm : breedsAPI.getBreeds(index))
        .then(response => console.log(response))
        .catch(err => console.log(err));
})

router.post('/details', (req, res, next) => {
    const breedName = req.body.breed
    console.log(breedName)
    axios.create().get(`https://www.purina.es/perros/razas-de-perro/${breedName}`)
        .then(response => {
            const $ = cheerio.load(response.data);
            const title = $('h1').text().trim()
            console.log(title)

            const image = $('.breed-box-image').children().html()
            // console.log(image)

            const description = $('.col-md-offset-2 p').text().trim()
            console.log(description)

            const info = $('.info').html().trim()
            console.log(info)

            // const details = $('text-center').each((i, e) => {
            //     const h1 = $(e).find('h1'.html())
            //     console.log(h1)
            // })

            return {
                title,
                image,
                description,
                info
            }
        })
        .then(response => res.json(response))
        .catch(error => console.log(error))


})


module.exports = router