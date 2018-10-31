import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import GolferShowContainer from '../containers/GolferShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/golfers/:id" component={GolferShowContainer}/>
      </Router>
    </div>
  )
}

export default App;
