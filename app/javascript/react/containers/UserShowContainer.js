import React, { Component } from 'react';
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardStrokeShow from '../components/CompleteScorecardStrokeShow'
import ScorecardTileContainer from './ScorecardTileContainer'

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        return(
          <ScorecardTileContainer
            key={scorecard.id}
            scorecard={scorecard}
          />
        )
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

// if (this.state.user != undefined){
//   // let scorecards = this.state.user.scorecards
//   let scorecards = [this.state.user.scorecards[0]]
//
//   scorecards.forEach(scorecard => {
//     if (scorecard.strokes != []){
//       // If the scorecard isn't empty...
//
//       holes = scorecard.holes.map(hole => {
//         holeCounter += 1;
//         return(
//           <CompleteScorecardHoleShow
//             key={hole.id}
//             hole={hole.hole}
//             counter={holeCounter}
//             />
//         )
//       })
//
//       yards = scorecard.holes.map(hole => {
//         yardCounter += 1;
//         return(
//           <CompleteScorecardYardsShow
//             key={hole.id}
//             yards={hole.yards}
//             counter={yardCounter}
//             />
//         )
//       })
//
//       par = scorecard.holes.map(hole => {
//         parCounter += 1
//         return(
//           <CompleteScorecardParShow
//             key={hole.id}
//             par={hole.par}
//             counter={parCounter}
//             />
//         )
//       })
//
//       stroke = scorecard.strokes.map(hole => {
//         strokeCounter += 1;
//         return(
//           <CompleteScorecardStrokeShow
//             key={hole.id}
//             counter={strokeCounter}
//             stroke={hole.strokes}
//             />
//         )
//       })
//     }
//   })
// }
