import { FC, useEffect } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router-dom'

import Main from './views/Main'
import Users from './views/Users'

const App: FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/users" component={Users} />
    </Switch>
  )
}

export default withRouter(App)
