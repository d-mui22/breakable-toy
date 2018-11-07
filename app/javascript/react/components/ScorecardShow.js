import React from 'react'

const ScorecardShow = (props) => {

  let scorecardHoles = '';

  for(let i = 0; i < 19; i++) {
      scorecardHoles += (<th id={`yard-${i}`}>`${i}`</th>)
    }

  return(
    <div>
      <h1 className="scorecard-title">Scorecard</h1>
      <form id="form-sc" className="form-vertical" method="post">
      <table className='table-scroll'>
        <thead>
          <tr className="scorecard-holes">
            <th className="scorecard-label">Hole</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
          </tr>
        </thead>
        <tbody>
          <tr className="scorecard-yards">
            <td className="scorecard-label">Yards</td>
            <td><input id='yard-1' onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
            <td><input onChange={props.handleYardsChange} size='4'/></td>
          </tr>
          <tr className="scorecard-par">
            <td className="scorecard-label">Par</td>
            <td><input id='par-1' onChange={props.handleParChange} size='3'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
            <td><input onChange={props.handleParChange} size='4'/></td>
          </tr>
          <tr>
            <td className="scorecard-label">Strokes</td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
            <td><input onChange={props.handleStrokesChange} size='4'/></td>
          </tr>
        </tbody>
      </table>
      <button className="scorecard-submit" onClick={props.handleHolesSubmit}>Submit Scorecard</button>
    </form>
    </div>
  )
}
export default ScorecardShow
