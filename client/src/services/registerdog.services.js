import http from './http-common';

const createDog = newdog => {
    console.log(newdog)
    // return http.post('/registerdog', newdog)
}

export default {
    createDog
}