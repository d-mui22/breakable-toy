import React from 'react'

const CompleteScorecardHoleShow = (props) => {

  let counterClass = `hole-${props.counter}`

  return(
    <th id={counterClass} onClick={props.click} width='3%'><a className='hole-links'>{props.holeNumber}</a></th>
  )
}

export default CompleteScorecardHoleShow
