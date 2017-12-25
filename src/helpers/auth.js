import Cookies from 'cookies-js'

const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return !!user
}

const signOut = (callback) => {
  localStorage.setItem('user', '')
}

const saveUser = (user) => {
  console.log('Saving user to local storage :', user)
  localStorage.setItem('user', JSON.stringify(user))
}

export default {
  isAuthenticated,
  saveUser,
  signOut
}
