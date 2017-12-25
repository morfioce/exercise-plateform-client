import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = (props) => {
  const user = props.user
    return (
      <Navbar className="Header">
        <Navbar.Header>
          <Navbar.Brand>
            <img src={user.profilePicture}/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">{user.userName}</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight className="mr-1">
            <a onClick={props.logOut}>Sign out</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header
