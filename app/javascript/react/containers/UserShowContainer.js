import React, { Component } from 'react';
import ScorecardTileContainer from './ScorecardTileContainer'
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardStrokeShow from '../components/CompleteScorecardStrokeShow'

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        user: body.user
      });
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let scorecards;
    if (this.state.user != undefined) {
      scorecards = this.state.user.scorecards.map(scorecard => {
        if (scorecard.holes[0] != undefined) {
          return(
            <ScorecardTileContainer
              key={scorecard.id}
              scorecard={scorecard}
              golfCourseId={scorecard.golf_course_id}
            />
          )
        }else {return ("")}
      })
    }
    return(
      <div>
        {scorecards}
      </div>
    )
  }
}
export default UserShowContainer;
