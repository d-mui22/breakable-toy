import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import GolfCoursesShowContainer from '../containers/GolfCoursesShowContainer'
import CompleteScorecardShowContainer from '../containers/CompleteScorecardShowContainer'
import UserScorecardShow from './UserScorecardShow'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/users/:id" component={UserShowContainer}/>
        <Route path='/users/:user_id/golf_courses/:id/scorecards/:id' component={CompleteScorecardShowContainer}/>
        <Route path="/golf_courses/:id" component={GolfCoursesShowContainer}/>
        <Route path="/users/:id/golf_courses/:id" component={UserScorecardShow}/>
      </Router>
    </div>
  )
}

export default App;
