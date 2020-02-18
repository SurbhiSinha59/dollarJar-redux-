import React from "react";
import { connect } from "react-redux";
import {
  onNameChange,
  onUserAddition,
  onEnterPress,
  onJarChange
} from "../actions/index";

function Person(props) {
  console.log(props.user);
  return (
    <div className="App">
      <h1>Welcome {props.user}</h1>
      <input
        type="text"
        value={props.name}
        placeholder="enter person"
        onChange={props.onNameChange}
        onKeyDown={props.onEnterPress}
      ></input>
      <button onClick={props.onUserAddition}>ADD USER</button>
      <p>
        <label>Enter Penalty amount </label>
        <input
          type="text"
          value={props.jarValue}
          placeholder="current jar value is 10"
          onChange={props.onJarChange}
        ></input>
      </p>
      <p>Total amount is : {props.totalSum}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.newUserReducer.userName,
    name: state.personReducer.newPersonObj.name,
    jarValue: state.personReducer.jarValue,
    totalSum: state.personReducer.totalSum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameChange: event => dispatch(onNameChange(event)),
    onEnterPress: event => dispatch(onEnterPress(event)),
    onUserAddition: event => dispatch(onUserAddition(event)),
    onJarChange: event => dispatch(onJarChange(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
