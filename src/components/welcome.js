import React from 'react'
import { Button } from 'react-bootstrap';

const Welcome = (props) => {
  const wellStyles = {
    maxWidth: 400,
    margin: '25px auto 10px',
  };
  
  return (
    <div className="well" style={wellStyles}>
      <Button bsStyle="primary" bsSize="large"
              onClick={() => props.history.push('/login/teacher')} block>
        Teacher
      </Button>
      <Button bsSize="large"
              onClick={() => props.history.push('/login/student')} block>
        Student
      </Button>
    </div>
  );
}

export default Welcome
