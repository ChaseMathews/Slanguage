import React from 'react';
import { Button } from 'react-bootstrap';

export default function LanguageButton(props) {

  return (
    <Button 
      variant={props.variant ? "success" : "danger"}
      disabled={props.disabled}
      name={props.language}
      value={props.value}
      onClick={() => props.setLanguageClicked(props.language)}
      >
      {props.language}
    </Button>
  )
}
