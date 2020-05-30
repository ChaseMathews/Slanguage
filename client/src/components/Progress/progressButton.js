import React from 'react';
import { Button } from 'react-bootstrap';

export default function LanguageButton(props) {

  return (
    <Button variant="danger" disabled={props.disabled} name={props.language}>{props.language}</Button>
  )
}
