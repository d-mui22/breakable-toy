import React from 'react'

const CompleteScorecardStrokeShow = (props) => {
  let counterClass = `stroke-${props.counter}`
  return(
      <th id={counterClass}>{props.stroke}</th>
  )
}

export default CompleteScorecardStrokeShow
