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

    let x = 0;
    x += 1;
    browserHistory.push(`/users/1/golf_courses/${this.props.params.id[1]}/scorecards/${x}`)
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

export default UserScorecardShow;
