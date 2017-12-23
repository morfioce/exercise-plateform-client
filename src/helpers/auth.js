import Cookies from 'cookies-js'

const isAuthenticated = () => {
  return Boolean(Cookies.get('connect.sid'))
}

const setCookie = (key, value) => {
  Cookies.set(key, value)
  return Promise.resolve()
}

const signOut = (callback) => {
  Cookies.set('connect.sid', 0)
  return Promise.resolve()
}

export default {
  isAuthenticated,
  setCookie,
  signOut
}
