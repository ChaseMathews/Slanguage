import React from 'react';  
import { ButtonGroup, Button } from 'react-bootstrap';

export default function LanguageProgress() {

// Conditionally render a button if they have any saved quiz progress in a specific language.


    return (
      
        <ButtonGroup>
<Button variant="danger">Spanish</Button>{' '}
  <Button variant="primary">French</Button>{' '}
  <Button variant="info">Italian</Button>{' '}
  <Button variant="success">German</Button>{' '}
  <Button variant="warning">Navajo</Button>{' '}




        </ButtonGroup>
      
              
      
    )
  }