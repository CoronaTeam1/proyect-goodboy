import axios from './http-common';

const getTraining = learn => axios.post('/training', {learn})
    .then(response => response.data[0])
    .catch(err => console.log(err))

export default getTraining