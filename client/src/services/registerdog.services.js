import axios from './http-common';

const createDog = newdog => {
    console.log(newdog)
    return axios.post('/registerdog', newdog).then(response => response.data)
}

export default {
    createDog
}