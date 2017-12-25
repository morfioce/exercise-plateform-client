import Cookies from 'cookies-js'

const isAuthenticated = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    return !!user
  } catch (e) {
    return false
  }
}

const logOut = (callback) => {
  localStorage.setItem('user', '')
}

const saveUser = (user) => {
  console.log('Saving user to local storage :', user)
  localStorage.setItem('user', JSON.stringify(user))
}

const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default {
  isAuthenticated,
  saveUser,
  getLoggedInUser,
  logOut
}
