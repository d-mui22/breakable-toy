import React from 'react'

const CompleteScorecardYardsShow = (props) => {
  let counterClass = `yards-${props.counter}`
  return(
      <td className='yards-text' id={counterClass}>{props.yards}</td>
  )
}

export default CompleteScorecardYardsShow
