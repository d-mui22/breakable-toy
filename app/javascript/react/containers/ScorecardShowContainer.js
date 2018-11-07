import React, { Component } from 'react';
import ScorecardShow from '../components/ScorecardShow'

class ScorecardShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yards: '',
      par: '',
      strokes: ''
    }
  }

  handleYardsChange(event) {
    this.setState({yards: event.target.value})
    debugger
  }
  handleParChange(event) {
    this.setState({par: event.target.value})
  }
  handleStrokesChange(event) {
    this.setState({strokes: event.target.value})
  }

  render() {
    return(
      <div>
        <ScorecardShow
          handleYardsChange={this.handleYardsChange}
          handleParChange={this.handleParChange}
          handleStrokesChange={this.handleStrokesChange}
        />
      </div>
    )
  }
}

export default ScorecardShowContainer;
