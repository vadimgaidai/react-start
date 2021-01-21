// import React from 'react'
import ScrollToTop from 'react-router-scroll-top'
import { Route, Switch, withRouter } from 'react-router-dom'

import Main from './views/Main'
import Users from './views/Users'

const App = () => (
  <ScrollToTop>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/users" component={Users} />
    </Switch>
  </ScrollToTop>
)

export default withRouter(App)
