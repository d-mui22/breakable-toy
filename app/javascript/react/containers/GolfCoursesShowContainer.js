import React, { Component } from 'react';
import GolfCourseShow from '../components/GolfCourseShow'

class GolfCoursesShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_courses: [],
      error: ''
    }
    this.addScorecard = this.addScorecard.bind(this)
    this.handleScorecardSubmit = this.handleScorecardSubmit.bind(this)
  }

  componentDidMount(){
    fetch (`/api/v1/golf_courses/${this.props.params.id}`)
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
      debugger
      this.setState({
        new_courses: [body.golf_course]
      });
    })
    .catch(error => console.error('Error:', error));
  }

  addHole(payLoad) {
    fetch(`/api/v1/golf_courses/${this.props.params.id}/holes`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({})
    })
  }
  addScorecard(payLoad) {
    fetch(`/api/v1/golf_courses/${this.props.params.id}/scorecards`, {
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
      user_id: 1,
      golf_course_id: this.props.params.id
    }
    this.addScorecard(scorecard)
  }

  render() {
    let courses = this.state.new_courses.map(course => {
      return(
        <GolfCourseShow
          key={course.id}
          id={course.id}
          name={course.name}
          handleScorecardSubmit={this.handleScorecardSubmit}
        />
      )
    })

    return(
     <div>
      {courses}
     </div>
    )
  }
}

export default GolfCoursesShowContainer;
