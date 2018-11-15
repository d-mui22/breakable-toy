import React from 'react'

const CompleteScorecardStrokeShow = (props) => {
  
  let counterClass = `stroke-${props.counter}`
  let color = ""

  if (props.stroke > props.par) {
    color = "stroke-red"
  }else if (props.stroke == props.par) {
    color = "stroke-par"
  }else color ="stroke-green"

  return(
      <th id={counterClass} className={color}>{props.stroke}</th>
  )
}

export default CompleteScorecardStrokeShow
