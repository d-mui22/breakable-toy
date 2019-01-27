import React, { Component } from 'react';
import ScorecardTile from './ScorecardTile'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

class GolfCourseShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      current_user: []
    }
    this.handleHoleClick = this.handleHoleClick.bind(this)
    this.handleHolesSubmit = this.handleHolesSubmit.bind(this)
    this.addHole = this.addHole.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          current_user: body
        })
      })
      .catch(error => console.error('Error:', error));
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
      if (document.getElementById(`yards-${x}`).value != "") {
        let hole = {
          yards: document.getElementById(`yards-${x}`).value,
          par: document.getElementById(`par-${x}`).value,
          hole: Number(document.getElementById(`${x}`).id),
          golf_course_id: this.props.id
        }
      this.addHole(hole)
      }
    }
    browserHistory.push(`/users/${window.currentUser.id}/golf_courses/${this.props.id}`)
  }

  render() {
    let holesForm;

    if (this.state.click == 1) {
      holesForm = <ScorecardTile
        handleHolesSubmit={this.handleHolesSubmit}
        />
    } else {
      holesForm = ''
    }
    return(
      <div>
        <h1 className='scorecard-title'>{this.props.name}</h1>
        <br/>
        <button className='sc-submit-button circle' onClick={this.handleHoleClick}>Add</button>
        {holesForm}
        <br/>
      </div>
    )
  }
}

export default GolfCourseShow;
