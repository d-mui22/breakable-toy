import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import GolfCoursesShowContainer from '../containers/GolfCoursesShowContainer'
import ScorecardStrokeSubmit from '../containers/ScorecardStrokeSubmit'
import ScorecardSubmit from './ScorecardSubmit'
import HoleShowContainer from '../containers/HoleShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>

        <Route path="/users/:id" component={UserShowContainer}/>
        <Route path='/users/:user_id/golf_courses/:id/scorecards/:id' component={ScorecardStrokeSubmit}/>
        <Route path="/golf_courses/:id" component={GolfCoursesShowContainer}/>
        <Route path="/users/:id/golf_courses/:id" component={ScorecardSubmit}/>
        <Route path="/users/:id/golf_courses/:id/holes/:id" component={HoleShowContainer}/>
      </Router>
    </div>
  )
}

export default App;
