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
                    arrNames.push({ name, routeImage })
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
        const info = []
        return axios.create().get(`https://www.purina.es/perros/razas-de-perro/${nameUrl}`)
            .then(response => {
                const $ = cheerio.load(response.data);
                // =========Descripcion de la raza=========
                const description = $('.col-md-offset-2 p').text().trim()

                // Esto saca el div que contiene Grupo, Otras mascotas, adecuado para estar solo, muda y guardian:
                const character = $('.paragraph--id--30976').html()

                // =========Aparece la info del perrete pero todo en un texto=========
                const info = $('.info li').text()
                // console.log('info:', info)

                // =========Aparece la info del perrete para meter en un Array=========
                let points = []
                $('.info li').each((i, el) => {
                    console.log(i, $(el).text())
                    let contenido = $(el).text()
                    points.push(contenido)
                })
                console.log('points', points)

                //ESTA PIEZA DE CODIGO HABILITA EL CHEERIO, UNA VEZ HECHO EL SCRAPPY SE PUEDE COMENTAR
                // ====== ESTRUCTURA DATOS TIPO BEAGLE =======
                $('.paragraph--id--30996 .paragraph__column div').each((i, el) => {
                    const title = $(el).find('h3').each((i, el) => {
                        // console.log(i, $(el).text())
                    })
                    let info = []
                    const pepe = $(el).find('p').each((i, el) => {
                        // console.log(i, $(el).text())
                        let text = $(el).text().replace(/\n/gi, '')
                        info.push(text)
                    })
                    console.log(info)
                    // console.log(info.length)
                })
                //HASTA AQUI

                Breeds.update({ name: breed }, {
                    description,
                    info: points

                })
                    .then(() => console.log("Save in BD"))
                    .catch(err => console.log(err))
                return {
                    description,
                    points,
                }
            })
    }



}

module.exports = BreedsAPIHandler