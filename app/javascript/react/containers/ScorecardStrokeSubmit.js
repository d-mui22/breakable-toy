import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'
import StrokeContainer from './StrokeContainer'

class ScorecardStrokeSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    }
    this.handleStrokesSubmit = this.handleStrokesSubmit.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/golf_courses/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        golf_course: body.golf_course
      })
    })
    .then(fetch(`/api/v1/users/${this.props.params.user_id}/golf_courses/${this.props.params.id[0]}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        course: body.golf_course
      })
    })
    )
    .catch(error => console.error('Error: ', error));
  }

  addScores(payLoad) {
    fetch(`/api/v1/users/${this.props.params.user_id}/golf_courses/${this.props.params.id[0]}/scorecards/${this.props.params.id[1]}/strokes`, {
      credentials: 'same-origin',
      method: 'post',
      body: JSON.stringify(payLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
  }

  handleStrokesSubmit(event){
    let courseLength = this.state.course.holes.length
    event.preventDefault()
    for(let x = 1; x<=courseLength; x++) {
      let stroke = {
        scorecard_id: Number(this.props.params.id[1]),
        hole_id: this.state.course.holes[x-1].id,
        strokes: document.getElementById(`stroke-${x}`).value,
        user_id: Number(this.props.params.user_id),
        par: Number(document.getElementById(`par-${x}`).textContent),
        holeNum: Number(x)
      }
      this.addScores(stroke)
    }
    browserHistory.push(`/users/${this.props.params.user_id}`)
  }

  render() {
    let holes;
    let yards;
    let par;
    let stroke;
    let strokeCounter = 0;
    let parCounter = 0;
    let yardCounter = 0;
    let holeCounter = 0;

    if (this.state.golf_course != undefined){
      holes = this.state.golf_course.holes.map(hole => {
        holeCounter += 1;
        return(
          <CompleteScorecardHoleShow
          key={hole.id}
          holeNumber={hole.hole}
          counter={holeCounter}
          />
        )
      })

      yards = this.state.golf_course.holes.map(hole => {
        yardCounter += 1;
        return(
          <CompleteScorecardYardsShow
          key={hole.id}
          yards={hole.yards}
          counter={yardCounter}
          />
        )
      })

      par = this.state.golf_course.holes.map(hole => {
        parCounter += 1
        return(
          <CompleteScorecardParShow
          key={hole.id}
          par={hole.par}
          counter={parCounter}
          />
        )
      })

      stroke = this.state.golf_course.holes.map(hole => {
        strokeCounter += 1;
        return(
          <StrokeContainer
          key={hole.id}
          counter={strokeCounter}
          />
        )
      })
    }

    return(
     <div>
       <h1 className='scorecard-title'>{this.state.course.name} Scorecard</h1>
       <br/>
        <form>
          <div className='table-display'>
           <table className='scroll'>
             <thead>
               <tr className="scorecard-holes">
                <th className='scorecard-label' width='5%'>Hole</th>
                  {holes}
               </tr>
             </thead>
             <tbody>
              <tr className="scorecard-yards">
                <td className="scorecard-label">Yards</td>
                {yards}
              </tr>
              <tr className='scorecard-par'>
                <td className='scorecard-label'>Par</td>
                {par}
              </tr>
              <tr className='scorecard-stroke'>
                <td className='scorecard-label'>Stroke</td>
                {stroke}
              </tr>
            </tbody>
          </table>
        </div>
        <button className="sc-submit-button circle" onClick={this.handleStrokesSubmit}></button>
      </form>
    </div>
    )
  }
}

export default ScorecardStrokeSubmit;
