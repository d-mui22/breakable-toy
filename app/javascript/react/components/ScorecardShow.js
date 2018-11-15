import React from 'react'

const ScorecardShow = (props) => {
  return(
    <div className='scorecard-form-container'>
      <div className='first-sc-form'>
        <form method="post">
          <div className='table-display'>
            <table className='scroll'>
              <thead>
                <tr className="scorecard-holes">
                  <th className="scorecard-label">Hole</th>
                  <th className='hole-text' id='1'>1</th>
                  <th className='hole-text' id='2'>2</th>
                  <th className='hole-text' id='3'>3</th>
                  <th className='hole-text' id='4'>4</th>
                  <th className='hole-text' id='5'>5</th>
                  <th className='hole-text' id='6'>6</th>
                  <th className='hole-text' id='7'>7</th>
                  <th className='hole-text' id='8'>8</th>
                  <th className='hole-text' id='9'>9</th>
                  <th className='hole-text' id='10'>10</th>
                  <th className='hole-text' id='11'>11</th>
                  <th className='hole-text' id='12'>12</th>
                  <th className='hole-text' id='13'>13</th>
                  <th className='hole-text' id='14'>14</th>
                  <th className='hole-text' id='15'>15</th>
                  <th className='hole-text' id='16'>16</th>
                  <th className='hole-text' id='17'>17</th>
                  <th className='hole-text' id='18'>18</th>
                </tr>
              </thead>
              <tbody>
                <tr className="scorecard-yards">
                  <td className="scorecard-label">Yards</td>
                  <td><input id='yards-1'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-2'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-3'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-4'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-5'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-6'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-7'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-8'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-9'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-10'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-11'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-12'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-13'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-14'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-15'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-16'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-17'onChange={props.handleYardsChange} size='4'/></td>
                  <td><input id='yards-18'onChange={props.handleYardsChange} size='4'/></td>
                </tr>
                <tr className="scorecard-par">
                  <td className="scorecard-label">Par</td>
                  <td><input id='par-1' onChange={props.handleParChange} size='3'/></td>
                  <td><input id='par-2' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-3' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-4' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-5' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-6' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-7' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-8' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-9' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-10' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-11' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-12' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-13' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-14' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-15' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-16' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-17' onChange={props.handleParChange} size='4'/></td>
                  <td><input id='par-18' onChange={props.handleParChange} size='4'/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="sc-submit-button circle" onClick={props.handleHolesSubmit}></button>
        </form>
      </div>
    </div>
  )
}
export default ScorecardShow
