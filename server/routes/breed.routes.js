const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')
const axios = require('axios').default

router.post('/', (req, res, next) => {
    const index = req.body.index
    axios.create().get(`https://www.purina.es/perros/razas-de-perro/tipos-de-razas-de-perro?breed_name=&page=${index}`)
        .then(response => {
            const $ = cheerio.load(response.data);
            arrNames = []
            $('.result-animal-container').each((i, e) => {
                const div = $(e).children()
                const name = $(div).find('.results-view-name').text()
                arrNames.push(name)
            })
            return arrNames
        })
        .then(response => res.json(response))
        .catch(err => console.log(err));
})



module.exports = router