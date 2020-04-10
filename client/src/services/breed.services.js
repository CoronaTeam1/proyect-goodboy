import axios from './http-common';


const getBreed = index => axios
    .post('/breed', {
        index
    })
    .then(response => response.data)
    .catch(err => console.log(err))

const getDetailsBreed = breed => {
    console.log(breed)
    axios
        .post('/breed/details', {
            breed
        })
        .then(response => {
            console.log(response.data.description)
            return response.data
        })
        .catch(error => console.log(error))
}
export default {
    getBreed,
    getDetailsBreed
}