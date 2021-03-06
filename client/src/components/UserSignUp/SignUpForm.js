import React from "react";
import { Form } from 'react-bootstrap';

export default function SignUpForm(props) {
  return (
    <Form onSubmit={e => props.handleFormSubmit(e)}>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Sign Up Below!</Form.Label>
        <Form.Control
          autoFocus
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

      <Form.Group controlId="formBasicPassword2">
        <Form.Control
          type="password"
          name="confirmPassword"
          value={props.userObject.confirmPassword}
          onChange={e => props.handleInputChange(e)}
          placeholder="Confirm Password" />
      </Form.Group>
      
      {props.children}

    </Form>
  );
}