import React from 'react'

const CompleteScorecardParShow = (props) => {
  let counterClass = `par-${props.counter}`
  return(
      <td id={counterClass}>{props.par}</td>
  )
}
export default CompleteScorecardParShow
