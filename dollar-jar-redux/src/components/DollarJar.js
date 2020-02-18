import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onAddAmount,
  onSubAmount,
  calculateTotalAmount
} from "../actions/index";
import AddNewPerson from "./AddNewPerson";
import Persons from "./Persons";

class DollarJar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Persons />
        {this.props.persons.map(user => {
          return (
            <AddNewPerson
              name={user.name}
              total={user.total}
              addAmount={() => {
                this.props.onAddAmount(user.id);
                this.props.calculateTotalAmount();
              }}
              subAmount={() => {
                this.props.onSubAmount(user.id);
                this.props.calculateTotalAmount();
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    persons: state.personReducer.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAmount: id => dispatch(onAddAmount(id)),
    onSubAmount: id => dispatch(onSubAmount(id)),
    calculateTotalAmount: () => dispatch(calculateTotalAmount())
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(DollarJar);
