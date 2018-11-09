import React from 'react'

const CompleteScorecardHoleShow = (props) => {
  let counterClass = `hole-${props.counter}`
  return(
      <th id={counterClass}>{props.hole}</th>
  )
}

export default CompleteScorecardHoleShow
