import axios from './http-common';

const registerUser = newuser => {
    console.log(newuser)
    return axios.post('/auth/signup', newuser).then(response => response.data)
}

const loginUser = user => {
    console.log(user)
    return axios.post('/auth/login',user).then(response => response.data)
}

const logout = () => axios.post('/logout').then(response => response.data)

const loggedin = () => axios.get('/loggedin').then(response => response.data)

export default {
    registerUser, loginUser,logout,loggedin
}

