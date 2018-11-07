import React, { Component } from 'react';
import ScorecardShow from './ScorecardShow'

class GolfCourseShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    }
    this.handleHoleClick = this.handleHoleClick.bind(this)
    this.handleHolesSubmit = this.handleHolesSubmit.bind(this)
  }

  componentDidMount() {
  }

  handleHoleClick(event) {
    if (this.state.click == 0) {
      this.setState({click: 1})
    } else {
      this.setState({click:0})
    }
  }

  handleHolesSubmit(event) {
    event.preventDefault()

    let endPoints =
    [`/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`,
      `/api/v1/golf_courses/${this.props.id}/holes`]
    let promises = endPoints.map((endPoint) => {
      return fetch(endPoint)
    })
debugger
    Promise.all(promises).then((responses) => {
      let parsedResponses = responses.map((response) => {
        debugger
        return response.json();
      })
      return Promise.all(parsedResponses)
      debugger
    })
  }

  render() {
    let holesForm;

    if (this.state.click == 1) {
      holesForm = <ScorecardShow
        handleHolesSubmit={this.handleHolesSubmit}
        />
    } else {
      holesForm = ''
    }

    return(
      <div>
        <h1>{this.props.name}</h1>
        <br/>
        <button onClick={this.props.handleScorecardSubmit}>Add Scorecard to {this.props.name}</button>
        <br/>
        <button onClick={this.handleHoleClick}>Add Holes to {this.props.name}</button>
        {holesForm}
      </div>
    )
  }
}

export default GolfCourseShow;
