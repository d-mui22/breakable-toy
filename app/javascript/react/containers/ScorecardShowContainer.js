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

  handleHoleSubmit(event) {
    event.preventDefault()
    let hole = {
      yard: this.state.yard,
      par: this.state.par
    }
  }

  onSubmit() {

  }

  inputKeyUp(event) {
    debugger
    event.which = event.which || e.keyCode;
    if(event.which == 13){
      this.setState({yard: event.target.value})
    }
  }

  render() {
    return(
      <div>
        <ScorecardShow
          addHoles={this.addHoles}
          handleYardsChange={this.handleYardsChange}
          handleParChange={this.handleParChange}
          handleStrokesChange={this.handleStrokesChange}
          inputKeyUp={this.inputKeyUp}
        />
      </div>
    )
  }
}

export default ScorecardShowContainer;
