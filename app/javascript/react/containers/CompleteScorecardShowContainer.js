import React, { Component } from 'react';
import CompleteScorecardHoleShow from '../components/CompleteScorecardHoleShow'
import CompleteScorecardYardsShow from '../components/CompleteScorecardYardsShow'
import CompleteScorecardParShow from '../components/CompleteScorecardParShow'

class CompleteScorecardShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
    .catch(error => console.error('Error: ', error));
  }

  render() {
    let holes;
    let yards;
    let par;
    if (this.state.golf_course != undefined){
      holes = this.state.golf_course.holes.map(hole => {
        return(
          <CompleteScorecardHoleShow
          key={hole.id}
          hole={hole.hole}
          />
        )
      })
      yards = this.state.golf_course.holes.map(hole => {
        return(
          <CompleteScorecardYardsShow
          key={hole.id}
          yards={hole.yards}
          />
        )
      })
      par = this.state.golf_course.holes.map(hole => {
        return(
          <CompleteScorecardParShow
          key={hole.id}
          par={hole.par}
          />
        )
      })
    }

    return(
     <div>
       <table className='table-scroll'>
         <thead>
           <tr className="scorecard-holes">
            <th className='scorecard-label'>Hole</th>
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
        </tbody>
      </table>
    </div>
    )
  }
}

export default CompleteScorecardShowContainer;
