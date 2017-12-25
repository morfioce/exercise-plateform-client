import React from 'react'
import Header from '../common/header.js'
import profilePicture from '../../profile.png'

import api from '../../helpers/api.js'
import util from '../../helpers/util.js'

class StudentHome extends React.Component {
  constructor(props) {
    super(props)
  }

  logOut() {
    api.logOut()
      .then(() => {
        window.location.reload()
      })
  }

  render() {
    const user = {
      ...util.getLoggerUser(),
      profilePicture
    };

    return <Header user={user} logOut={this.logOut}/>
  }
}

export default StudentHome
