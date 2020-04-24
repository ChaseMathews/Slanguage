import React from 'react';
import { Form } from 'react-bootstrap';




export default function SignInForm() {


  return (


    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Welcome Back</Form.Label>
        <Form.Control type="userName" placeholder="Username" />

      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
        <br></br>
      </Form.Group>


    </Form>





  );
}