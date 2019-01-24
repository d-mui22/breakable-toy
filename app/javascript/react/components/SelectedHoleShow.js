import React from 'react'
import moment from 'moment'

const SelectedHoleShow = (props) => {
  let holeSelected;
  let scorecardSelected;
  let strokeSelected;
  let holeSelectedId;
  let courseSelected;
  let datePlayed;
  let alternate;
  let selectedStrokeCss;
  let hide;

  props.holes.map(hole => {
    if (hole.hole == props.holeId) {
      holeSelected = hole.hole
      holeSelectedId = hole.id
      courseSelected = props.courseName
    }
    return
  })

  props.scorecards.strokes.map(stroke => {
    if (stroke.hole_id == holeSelectedId) {
      if (stroke.strokes == undefined) {
        strokeSelected = "Hole not played"
        hide = "hidden"
      } else {
      strokeSelected = stroke.strokes
      datePlayed = stroke.created_at.split('T')[0]
      hide = "date-played"
      }
    }
  })

  return(
    <div>
      <div className='selected-stroke-container'>
        <div className='field-container'>
          <h3 className='selected-stroke'>-Strokes-<br/>{strokeSelected}</h3>
          <p className={hide}>Played on: {datePlayed}</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default SelectedHoleShow
