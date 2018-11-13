import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HoleShowContainer from '../containers/HoleShowContainer';

class CompleteScorecardHoleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let holeInfo = {holeNumber: this.props.holeNumber, golfCourseId: this.props.golfCourseId}
    this.props.holeSelector(holeInfo)
  }

  render() {
    let counterClass = `hole-${this.props.counter}`
    return(
      <th id={counterClass} onClick={this.handleClick} width='3%'><a className='hole-links'>{this.props.holeNumber}</a></th>
    )
  }
}

export default CompleteScorecardHoleShow
