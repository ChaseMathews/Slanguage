import React from 'react';
import { Form } from 'react-bootstrap';

export default function SignInForm(props) {
  return (
    <Form onSubmit={e => props.handleFormSubmit(e)}>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Welcome Back!</Form.Label>
        <Form.Control
        autoFocus 
        type="username"
        name="username" 
        value={props.user.username}
        onChange={e => props.handleInputChange(e)} 
        placeholder="Username" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control 
        type="password"
        name="password" 
        value={props.user.password}
        onChange={e => props.handleInputChange(e)} 
        placeholder="Password" />
      </Form.Group>

      {props.children}

    </Form>

  );
}