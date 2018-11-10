import React from 'react'

const CompleteScorecardHoleShow = (props) => {
  // debugger
  let counterClass = `hole-${props.counter}`
  return(
      <th id={counterClass}><a>{props.hole}</a></th>
  )
}

export default CompleteScorecardHoleShow
