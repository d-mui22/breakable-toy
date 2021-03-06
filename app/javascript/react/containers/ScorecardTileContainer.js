import React, { Component } from 'react';
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardStrokeShow from '../components/CompleteScorecardStrokeShow'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import HoleShowContainer from './HoleShowContainer'

const ScorecardTileContainer = (props) => {
  let holeSelector = null;
  let handleHoleClick = null;

  holeSelector = (holeInfo) => {
    let holeNum = holeInfo.holeNumber
    let courseNum = holeInfo.golfCourseId
    browserHistory.push(`/users/${props.scorecard.user_id}/golf_courses/${courseNum}/holes/${holeNum}`);
  }

  handleHoleClick = (event) => {
    event.preventDefault()
    let holeInfo = {holeNumber: event.target.text, golfCourseId: props.golfCourseId}
    holeSelector(holeInfo)
  }

  let parCounter = 0;
  let yardCounter = 0;
  let strokeCounter = 0;
  let holeCounter = 0;
  let dat = '';
  let totalStrokes= 0;
  let totalPar=0;

  props.scorecard.strokes.forEach(stroke => {
    totalStrokes+=stroke.strokes
    totalPar+=stroke.par
    if (Boolean(stroke.created_at)) {
      dat = stroke.created_at
    }
  })


  let pars = props.scorecard.holes.map(par => {
    parCounter += 1;
    return(
      <CompleteScorecardParShow
        key={par.id}
        par={par.par}
        counter={parCounter}
      />
    )
  })

  let yards = props.scorecard.holes.map(yard => {
    yardCounter += 1;
    return(
      <CompleteScorecardYardsShow
        key={yard.id}
        yards={yard.yards}
        counter={yardCounter}
      />
    )
  })

  let holes = props.scorecard.holes.map(hole => {
    holeCounter += 1;
    return(
      <CompleteScorecardHoleShow
        key={hole.id}
        holeNumber={hole.hole}
        golfCourseId={hole.golf_course_id}
        counter={holeCounter}
        holeSelector={holeSelector}
        click={handleHoleClick}
      />
    )
  })

  let strokes = props.scorecard.strokes.map(stroke => {
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
        <h4 className='scorecard-title2'>{props.scorecard.golf_course.name} Scorecard</h4><h6 className='date-played'>Played on {dat.split('T')[0]}</h6>
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

export default ScorecardTileContainer;
