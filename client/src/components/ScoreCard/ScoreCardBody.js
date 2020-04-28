import React from "react";



function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
      </button>{" "}
      <button className="btn btn-danger" onClick={props.handleDecrement}>
        Decrement
      </button>
      <p className="card-text">: {props.count}</p>
    </div>
  );
}

export default CardBody;