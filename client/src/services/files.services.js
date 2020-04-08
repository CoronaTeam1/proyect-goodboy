import http from './http-common';

const handleUpload = theFile => {
    return http.post('/files', theFile).then(response => response.data)
}

export default {
    handleUpload
}