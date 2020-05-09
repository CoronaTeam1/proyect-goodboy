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
                const $ = cheerio.load(response.data);
                const arrNames = []
                $('.result-animal-container').each((i, e) => {
                    const div = $(e).children()
                    const name = $(div).find('.results-view-name').text()
                    const routeImage = "https://www.purina.es" + $(e).find("img").attr('src')
                    arrNames.push({
                        name,
                        routeImage
                    })
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
        const breedName = breed.replace(/ /g, '-')
        const nameUrl = this.deleteSimbol(breedName)
        return axios.create().get(`https://www.purina.es/perros/razas-de-perro/${nameUrl}`)
            .then(response => {
                const $ = cheerio.load(response.data);
                const description = $('.col-md-offset-2 p').text().trim()
                const character = $('.paragraph--id--30976').html()
                const info = $('.info li').text()
                let points = []
                $('.info li').each((i, el) => {
                    let contenido = $(el).text()
                    points.push(contenido)
                })

                $('.paragraph--id--30996 .paragraph__column div').each((i, el) => {
                    let info = []
                    const pepe = $(el).find('p').each((i, el) => {
                        let text = $(el).text().replace(/\n/gi, '')
                        info.push(text)
                    })

                })

                return Breeds.update({
                    name: breed
                }, {
                    description,
                    info: points
                })
            })
            .then(() => Breeds.find({
                name: breed
            }))
            .then(response => response)
            .catch(err => console.log(err))
    }



}

module.exports = BreedsAPIHandler