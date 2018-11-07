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
    this.addHole = this.addHole.bind(this)
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

  addHole(payLoad) {
    fetch(`/api/v1/golf_courses/${this.props.id}/holes`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }

  handleHolesSubmit(event) {
    event.preventDefault()
    for(let x = 1; x<=18; x++) {
      let hole = {
        yards: document.getElementById(`yards-${x}`).value,
        par: document.getElementById(`par-${x}`).value,
        hole: document.getElementById(`${x}`).id,
        golf_course_id: this.props.id
      }
      this.addHole(hole)
    }
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
        <button onClick={this.handleHoleClick}>Add Holes to {this.props.name}</button>
        {holesForm}
        <br/>
        <a href='/golf_courses/1/holes'>Scorecard</a>
      </div>
    )
  }
}

export default GolfCourseShow;

// let endPoints =
// [`/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`,
//   `/api/v1/golf_courses/${this.props.id}/holes`]
//   let promises = endPoints.map((endPoint) => {
//     return fetch(endPoint)
//   })
//   Promise.all(promises).then((responses) => {
//     let parsedResponses = responses.map((response) => {
//       return response.json();
//     })
//     return Promise.all(parsedResponses)
//   })
// }
