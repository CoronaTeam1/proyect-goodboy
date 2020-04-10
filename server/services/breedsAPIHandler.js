const axios = require('axios').default;
const cheerio = require('cheerio')
const Breeds = require('../models/Breeds.model')

class BreedsAPIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://newsapi.org/v2`
        })
    }

    getBreeds(index) {
        return axios.create().get(`https://www.purina.es/perros/razas-de-perro/tipos-de-razas-de-perro?breed_name=&page=${index}`)
            .then(response => {
                console.log("SCRAPPING WEB")
                const $ = cheerio.load(response.data);
                const arrNames = []
                $('.result-animal-container').each((i, e) => {
                    const div = $(e).children()
                    const name = $(div).find('.results-view-name').text()
                    arrNames.push(name)
                })
                arrNames.forEach(elm => Breeds.create({
                    name: elm,
                    index
                }))
                return arrNames
            })
            .catch(err=> console.log(err))
    }
}

module.exports = BreedsAPIHandler