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
                    const routeImage = "https://www.purina.es" + $(e).find("img").attr('src')
                    arrNames.push({name, routeImage})
                })
                arrNames.forEach(elm => Breeds.create({
                    name: elm.name,
                    image: elm.routeImage,
                    index
                }))
                return arrNames
            })
            .catch(err => console.log(err))
    }
    deleteSimbol(breedName) {
        const simbol = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
            noSimbol = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
            reg = new RegExp('[' + simbol + ']', 'ug');

        return breedName.replace(
                reg,
                match => noSimbol.charAt(simbol.indexOf(match))
            );

    }
    getDetails(breed) {
        const breedName = breed.name.replace(/ /g, '-')
        const nameUrl = this.deleteSimbol(breedName)
        return axios.create().get(`https://www.purina.es/perros/razas-de-perro/${nameUrl}`)
            .then(response => {
                const $ = cheerio.load(response.data);
                const title = $('h1').text().trim()
                const image = $('.breed-box-image').children().html()
                const description = $('.col-md-offset-2 p').text().trim()
                const info = $('.info').html().trim()

                Breeds.findByIdAndUpdate(breed._id, {
                        description
                    })
                    .then(() => console.log("Save in BD"))
                    .catch(err => console.log(err))
                return {
                    description
                }
            })
    }



}

module.exports = BreedsAPIHandler