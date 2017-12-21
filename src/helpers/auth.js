import Cookies from 'cookies-js'

const isAuthenticated = (state) => {
  return Boolean(Cookies.get('logged'))
}

const authenticate = (callback) => {
  Cookies.set('logged', true)
  return Promise.resolve()
}

const signOut = (callback) => {
  Cookies.set('logged', false)
  return Promise.resolve()
}

export default {
  isAuthenticated,
  authenticate,
  signOut
}
