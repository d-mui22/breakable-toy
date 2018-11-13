import React from 'react'

const HoleShow = (props) => {
  let holeSelected;
  let scorecardSelected;
  let strokeSelected;
  let holeSelectedId;
  let courseSelected;
  let datePlayed;
  const timestamp = datePlayed
  let alternate;
  let selectedStrokeCss;

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
      strokeSelected = stroke.strokes
      datePlayed = stroke.created_at
    }
  })

  return(
    <div>
      <div className='selected-stroke-container'>
        <div className='field-container'>
          <h3 className='selected-stroke'>Strokes: {strokeSelected}</h3>
          <p className='date-played'>Played on: {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)}</p>
        </div>
      </div><br/>
    </div>
  )
}

export default HoleShow
