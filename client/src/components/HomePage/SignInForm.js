import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../utils/Context';

export default function SignInForm(props) {

  const { message } = useContext(UserContext);

  return (
    <Form onSubmit={e => props.handleFormSubmit(e)}>

      <Form.Group controlId="formBasicEmail">
        <Form.Label><span>{message}</span></Form.Label>
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