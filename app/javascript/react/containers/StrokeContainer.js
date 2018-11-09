import React, { Component } from 'react';

class StrokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let counterClass = `stroke-${this.props.counter}`
    return(
        <td><input id={counterClass} size='4'/></td>
    )
  }
}

export default StrokeContainer;
