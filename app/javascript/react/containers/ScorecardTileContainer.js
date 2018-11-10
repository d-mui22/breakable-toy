import React, { Component } from 'react';
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardStrokeShow from '../components/CompleteScorecardStrokeShow'

class ScorecardTileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick(event){
    event.preventDefault()

  }

  render() {
    let parCounter = 0
    let yardCounter = 0
    let strokeCounter = 0
    let holeCounter = 0
    let date;

    let pars = this.props.scorecard.holes.map(par => {
      parCounter += 1;
      return(
        <CompleteScorecardParShow
          key={par.id}
          par={par.par}
          counter={parCounter}
        />
      )
    })
    let yards = this.props.scorecard.holes.map(yard => {
      yardCounter += 1;
      return(
        <CompleteScorecardYardsShow
          key={yard.id}
          yards={yard.yards}
          counter={yardCounter}
        />
      )
    })
    let holes = this.props.scorecard.holes.map(hole => {
      holeCounter += 1;
      return(
        <CompleteScorecardHoleShow
          key={hole.id}
          hole={hole.hole}
          counter={holeCounter}
        />
      )
    })
    let strokes = this.props.scorecard.strokes.map(stroke => {
      strokeCounter += 1;
      date = stroke.created_at
      return(
        <CompleteScorecardStrokeShow
          key={stroke.id}
          stroke={stroke.strokes}
          counter={strokeCounter}
        />
      )
    })
    return(
      <div>
        <h1 className='course-name'>{this.props.scorecard.golf_course.name} Scorecard</h1><h6>Played on {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(this.date)}</h6>
        <table className='table-scroll'>
          <thead>
            <tr className="scorecard-holes">
              <th className='scorecard-label'>Hole</th>
              {holes}
            </tr>
          </thead>
          <tbody>
            <tr className="scorecard-yards">
              <td className="scorecard-label">Yards</td>
              {yards}
            </tr>
            <tr className='scorecard-par'>
              <td className='scorecard-label'>Par</td>
              {pars}
            </tr>
            <tr className='scorecard-stroke'>
              <td className='scorecard-label'>Stroke</td>
              {strokes}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScorecardTileContainer;
