const getLoggerUser = () => {
  try {
    return JSON.parse(window.localStorage.getItem('user'))
  } catch (e) {
    return null
  }
}

export default {
  getLoggerUser
}
