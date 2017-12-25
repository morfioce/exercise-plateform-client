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
    .then((response) => {
      Auth.saveUser(response.data)
      return response.data
    })
}

const logOut = () => {
  const LOGOUT_URL = BASE_URL + '/logout'
  return axios.get(LOGOUT_URL)
    .then((response) => {
      Auth.logOut()
      return response.data
    })
}

export default {
  logIn,
  logOut
}
