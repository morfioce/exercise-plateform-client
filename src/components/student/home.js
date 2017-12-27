import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from '../common/header.js'
import profilePicture from '../../profile.png'

import Classrooms from './classrooms.js'
import Assignments from './assignments.js'
import AssignmentWorkspace from './assignmentWorkspace.js'

import api from '../../helpers/api.js'
import util from '../../helpers/util.js'

class StudentHome extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // get data from the server
    this.setState(() => {
      return {
        classrooms: ['HTML', 'CSS', 'JS']
      }
    })
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
    const match = this.props.match.url
    return (
      <div>
        <Header user={user} logOut={this.logOut}/>
        <Router>
          <Switch>
              <Route exact path={`${match}/classrooms`}
                render={ (props) => {
                  // Student's classrooms
                  return <Classrooms {...props} classrooms={this.classrooms} />
                }
              } />
              <Route exact path={`${match}/classrooms/:class_ref/assignments`}
                render = { (props) => {
                  // Show all assignments realted to a classroom
                  return <Assignments {...props} />
                }
              }/>
              <Route path={`${match}/classrooms/:class_ref/assignments/:ass_ref`}
                render = { (props) => {
                  // workspace for student to attempt an exer
                  return <AssignmentWorkspace {...props} />
                }
              } />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default StudentHome
