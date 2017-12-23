import Auth from './auth.js'
import axios from 'axios'

const logIn = (username, password, role) => {
  // if (username === 'test' && password === 'test') {
  //   return Auth.authenticate()
  //     .then(() => {
  //       return Promise.resolve({username, password, role})
  //     })
  // }
  const userCredentials = {username, password, role}
  return axios('http://localhost:5000/login',{
      method: 'post',
      withCredentials: true,
      data: userCredentials
    })
    .then((user) => {
      return user
    })
  return Promise.reject('Invalid redentials')
}

const logOut = () => {
  Auth.signOut(() => {
    return Promise.resolve(true)
  })
}

export default {
  logIn,
  logOut
}
