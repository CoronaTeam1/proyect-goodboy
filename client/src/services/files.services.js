import axios from './http-common';

const handleUpload = theFile => {
    return axios.post('/files', theFile).then(response => response.data)
}

export default {
    handleUpload
}