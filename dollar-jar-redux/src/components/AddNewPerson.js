import React from "react";
import "./Person.css";
import { connect } from "react-redux";

const person = props => {
  return (
    <div className="Person">
      <p>{props.name}</p>
      <button onClick={props.addAmount}>ADD</button>{" "}
      <button onClick={props.subAmount}>SUB</button>
      <p>{props.total}</p>
    </div>
  );
};
export default person;
