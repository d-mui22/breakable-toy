import React, { Component } from 'react';
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import HoleShow from '../components/HoleShow'

class HoleShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id[0]}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        userScorecards: body.user.scorecards
      })
    })
  }
  render() {
    let userHole;
    let userId = this.props.params.id[0]
    let courseId = this.props.params.id[1]
    let holeId = this.props.params.id[2]
    let courseName;
    let courseHole;
    let holeSelected;

    if (this.state.userScorecards != undefined && this.state.userScorecards != []) {
      userHole = this.state.userScorecards.map(scorecard => {
        if (scorecard.golf_course.id == courseId) {

          scorecard.holes.map(hole => {
            if (hole.hole == holeId) {
              holeSelected = hole.hole
            }
            return
          })
          courseName = scorecard.golf_course.name
          return(
            <HoleShow
              key={scorecard.id}
              scorecards={scorecard}
              holes={scorecard.holes}
              userId={userId}
              courseId={courseId}
              holeId={holeId}
            />
          )
        }
      })
    }
    return(
      <div>
        <div className='sign-up-container'>
          <div className='field-container'>
            <h2 className='selected'>{courseName}</h2>
            <h2 className='selected'>Hole Number: {holeSelected}</h2>
          </div>
        </div>
        <br/>
        {userHole}
      </div>
    )
  }
}

export default HoleShowContainer;
