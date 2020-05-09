import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Index from './views/Index.jsx'
import Trial from './views/Trial/Trial.jsx'

const App = () => (
	<Switch>
		<Route path="/" component={Index} exact />
		<Route path="/trial" component={Trial} />
	</Switch>
)

export default withRouter(App)
