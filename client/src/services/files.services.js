import http from './http-common';

const handleUpload = theFile => {
    console.log(theFile)
    return http.post('/files', theFile).then(response => {
        return response.data
    })
}

export default {
    handleUpload
}