import React, { useState, useContext, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { UserContext } from '../../utils/Context';

export default function LanguageButtons() {

  // Conditionally render a button if they have any saved quiz progress in a specific language.
  const [disabled, setDisabled] = useState(false);
  const { user, currentLang } = useContext(UserContext);

  const userState = () => console.log(user);

// if language exists in user state

  return (
    <>
    <Button variant="danger" onClick={userState}>click</Button>

    <ButtonGroup>
      <Button variant="danger" disabled={disabled} name="Spanish">Spanish</Button>{' '}
      <Button variant="primary" disabled={disabled} name="French">French</Button>{' '}
      <Button variant="info" disabled={disabled} name="Italian">Italian</Button>{' '}
      <Button variant="success" disabled={disabled} name="German">German</Button>{' '}
      <Button variant="warning" disabled={disabled} name="Navajo">Navajo</Button>{' '}




    </ButtonGroup>
</>


  )
}