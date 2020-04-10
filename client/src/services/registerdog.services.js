import axios from './http-common';

const createDog = newdog => axios.post('/registerdog', newdog).then(response => response.data).catch(err => console.log(err))

export default {
    createDog
}