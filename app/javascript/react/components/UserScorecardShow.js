import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

class UserScorecardShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    }
    this.addScorecard = this.addScorecard.bind(this)
    this.handleScorecardSubmit = this.handleScorecardSubmit.bind(this)
  }

  componentDidMount(){
    fetch (`/api/v1/golf_courses/${this.props.params.id[1]}`)
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
        course: body.golf_course
      });
    })
    .catch(error => console.error('Error:', error));
  }

  addScorecard(payLoad) {
    fetch(`/api/v1/users/${this.props.params.id[0]}/golf_courses/${this.props.params.id[1]}/scorecards`, {
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

  handleScorecardSubmit(event) {
    event.preventDefault()
    let scorecard = {
      user_id: this.props.params.id[0],
      golf_course_id: this.props.params.id[1]
    }
    this.addScorecard(scorecard)
  }

  render() {
    return(
      <div>
        <h1>{this.state.course.name}</h1>
        <button onClick={this.handleScorecardSubmit}>Add Scorecard to {this.state.course.name}</button>
        <br/>
      </div>
    )
  }
}

export default UserScorecardShow;
