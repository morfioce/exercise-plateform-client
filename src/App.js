import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Welcome from './components/welcome.js'
import PrivateRoute from './components/privateRoute.js'
import Login from './components/login/login.js'
import TeacherHome from './components/teacher/home.js'
import StudentHome from './components/student/home.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App container">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise Platform</h1>
        </header>

        <main className="App-main">
          <Router>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/teacher" component={TeacherHome} />
                <PrivateRoute path="/student" component={StudentHome} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
