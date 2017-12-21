import Auth from './auth.js'

const logIn = (username, password, role) => {
  if (username === 'test' && password === 'test') {
    return Auth.authenticate()
      .then(() => {
        return Promise.resolve({username, password, role})
      })
  }
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
