import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        });
    }

    getBreed = index => this.service
        .post('/breed', { index })
        .then(response => response.data)
        .catch(err => console.log(err))

    getDetailsBreed = breed => this.service
        .post('/breed/details', { breed })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => console.log(error))
}