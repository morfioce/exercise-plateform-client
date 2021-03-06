import Auth from './auth.js'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const logIn = (username, password, role) => {
  const userCredentials = {username, password, role}
  const LOGIN_URL = BASE_URL + '/login'

  return axios(LOGIN_URL, {
      method: 'post',
      withCredentials: true,
      data: userCredentials
    })
    .then((user) => {
      return user
    })
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
