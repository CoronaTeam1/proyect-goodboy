import axios from './http-common';

const registerUser = newuser => axios.post('/auth/signup', newuser).then(response => response.data).catch(err => console.log(err))

const loginUser = user => axios.post('/auth/login',user).then(response => response.data).catch(err => console.log(err))

const logout = () => axios.post('/logout').then(response => response.data).catch(err => console.log(err))

const loggedin = () => axios.get('/auth/loggedin').then(response => response.data).catch(err => console.log(err))

export default {
    registerUser, loginUser,logout,loggedin
}

