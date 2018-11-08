import React, { Component } from 'react';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return(
      <div>
        <button onClick={this.props.handleScorecardSubmit}>Add Scorecard to {this.props.name}</button>
        <br/>
      </div>
    )
  }
}

export default UserShowContainer;
