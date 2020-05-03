import React from "react";
import { Form } from 'react-bootstrap';

export default function SignUpForm(props) {
  return (
    <Form>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Sign Up Below!</Form.Label>
        <Form.Control
          type="username"
          name="username"
          value={props.userObject.username}
          onChange={e => props.handleInputChange(e)}
          placeholder="Username" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          value={props.userObject.password}
          onChange={e => props.handleInputChange(e)}
          placeholder="Password" />
      </Form.Group>
      
    </Form>
  );
}