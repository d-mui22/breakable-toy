import React from 'react'

const CompleteScorecardYardsShow = (props) => {
  let counterClass = `yards-${props.counter}`
  return(
      <td id={counterClass}>{props.yards}</td>
  )
}

export default CompleteScorecardYardsShow
