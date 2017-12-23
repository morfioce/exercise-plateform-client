import React from 'react'
import api from '../../helpers/api.js'

import {
  Form, FormGroup, Col,
  FormControl, ControlLabel, Checkbox, Button
} from 'react-bootstrap'

import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.logIn = this.logIn.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateEmail(e) {
    this.updateState('email', e.target.value)
  }

  updatePassword(e) {
    this.updateState('password', e.target.value)
  }

  updateState(propName, propVal) {
    this.setState(() => {
      return {
        [propName]: propVal
      }
    })
  }

  logIn(e) {
    e.preventDefault()

    if (this.state.email && this.state.password) {
      // Clear input fields
      this.updateState('email', '')
      this.updateState('password', '')

      const role = (this.props.location.pathname.indexOf('teacher') > -1) ?
        'teacher' :
        'student'
      api.logIn(this.state.email, this.state.password, role)
        .then((user) => {
          console.log(user)
          console.log('navigating to home page')
          this.props.history.push(`/${role}`)
        })
        .catch((err) => {
          // update the sate accordingly
          console.log(err)
        })
    }
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2} >
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email"
              onChange={this.updateEmail}
              value={this.state.email} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password"
              onChange={this.updatePassword}
              value={this.state.password}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.logIn}>
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
export default Login
