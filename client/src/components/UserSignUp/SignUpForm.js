import React from "react";
import { Form } from 'react-bootstrap';



export default function SignUpForm() {


    return (

<Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Please Enter a User Name</Form.Label>
  <Form.Control type="userName" placeholder="Enter a Username" />

</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Please Enter a Password</Form.Label>
  <Form.Control type="password" placeholder="Enter a Password" />
</Form.Group>


<Form.Group>

  </Form.Group>
  </Form>

    );
}