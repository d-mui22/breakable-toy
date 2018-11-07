import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import ScorecardShowContainer from '../containers/ScorecardShowContainer'
import GolfCoursesShowContainer from '../containers/GolfCoursesShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/users/:id" component={UserShowContainer}/>
        <Route path='/users/:user_id/golf_courses/:id/scorecards/:id' component={ScorecardShowContainer}/>
        <Route path="/golf_courses/:id" component={GolfCoursesShowContainer}/>
      </Router>
    </div>
  )
}

export default App;
