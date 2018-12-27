import React, { Component } from 'react';
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardStrokeShow from '../components/CompleteScorecardStrokeShow'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import HoleShowContainer from './HoleShowContainer'

class ScorecardTileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.holeSelector = this.holeSelector.bind(this)
  }

  holeSelector(holeInfo){
    let holeNum = holeInfo.holeNumber
    let courseNum = holeInfo.golfCourseId
    browserHistory.push(`/users/${this.props.scorecard.user_id}/golf_courses/${courseNum}/holes/${holeNum}`);
  }

  render() {
    let parCounter = 0;
    let yardCounter = 0;
    let strokeCounter = 0;
    let holeCounter = 0;
    let dat = '';
    let totalStrokes= 0;
    let totalPar=0;

    this.props.scorecard.strokes.forEach(stroke => {
      totalStrokes+=stroke.strokes
      totalPar+=stroke.par
      if (Boolean(stroke.created_at)) {
        dat = stroke.created_at
      }
    })


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
          holeNumber={hole.hole}
          golfCourseId={hole.golf_course_id}
          counter={holeCounter}
          handleClick={this.handleClick}
          holeSelector={this.holeSelector}
        />
      )
    })

    let strokes = this.props.scorecard.strokes.map(stroke => {
      strokeCounter += 1;
      return(
        <CompleteScorecardStrokeShow
          key={stroke.id}
          stroke={stroke.strokes}
          counter={strokeCounter}
          par={stroke.par}
        />
      )
    })

    return(
      <div>
        <div className='table-display'>
          <h4 className='scorecard-title2'>{this.props.scorecard.golf_course.name} Scorecard</h4><h6 className='date-played'>Played on {dat.split('T')[0]}</h6>
          <table className='scroll' name="Scorecard">
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
          <p className='scorecard-score'>Par: {totalPar} Strokes: {totalStrokes}</p>
        </div>
      </div>
    )
  }
}

export default ScorecardTileContainer;
