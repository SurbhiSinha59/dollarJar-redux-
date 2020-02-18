import React from "react";
import { Link } from "react-router-dom";
import dollarJar from "../src/components/DollarJar";
import { connect } from "react-redux";
import { HandleNameChange } from "./actions/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.HandleNameChange(event)}
            value={this.props.name}
          ></input>
          <Link to={{ pathname: "/dollarJar", user: this.props.name }}>
            <button type="submit " disabled={!this.props.name.trim()}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.newUserReducer.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    HandleNameChange: event => dispatch(HandleNameChange(event))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
