import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

class AddScorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [],
      scorecard_count: ''
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
    fetch(`/api/v1/users/:user_id/golf_courses/:golf_course_id/scorecards`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        scorecard_count: body.scorecards.length
      })
      let sc_id = this.state.scorecard_count + 1
      browserHistory.push(`/users/1/golf_courses/${this.props.params.id[1]}/scorecards/${sc_id}`)
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
        <div className='scorecard-title'>
        <h6 className='sc-add'>Add Scorecard</h6>
        <h3 className='sc-cn'>{this.state.course.name}</h3>
        </div>
        <br/>
        <button className='sc-submit-button circle' onClick={this.handleScorecardSubmit} href=""></button>
        <br/>
      </div>
    )
  }
}

export default AddScorecard;
