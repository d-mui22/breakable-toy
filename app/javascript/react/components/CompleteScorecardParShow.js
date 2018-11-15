import React from 'react'

const CompleteScorecardParShow = (props) => {
  
  let counterClass = `par-${props.counter}`
  return(
      <td className='par-text' id={counterClass}>{props.par}</td>
  )
}
export default CompleteScorecardParShow
