import React from "react";
import { Form } from 'react-bootstrap';

export default function SignUpForm(props) {
  return (
    <Form>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Please enter a username</Form.Label>
        <Form.Control
          type="username"
          name="username"
          value={props.userObject.username}
          onChange={e => props.handleInputChange(e)}
          placeholder="example123" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Please enter a password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={props.userObject.password}
          onChange={e => props.handleInputChange(e)}
          placeholder="password123" />
      </Form.Group>
      
    </Form>
  );
}