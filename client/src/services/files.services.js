import axios from './http-common';

const handleUpload = theFile => axios.post('/files', theFile).then(response => response.data).catch(err => console.log(err))

export default {
    handleUpload
}