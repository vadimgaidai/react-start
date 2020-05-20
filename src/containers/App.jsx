import React from 'react'
import ScrollToTop from 'react-router-scroll-top'
import { Route, Switch, withRouter } from 'react-router-dom'

import Index from '../views/index/Index.jsx'
import Trial from '../views/trial/Trial.jsx'

const App = () => {
	return (
		<ScrollToTop>
			<Switch>
				<Route path="/" component={Index} exact />
				<Route path="/trial" component={Trial} />
			</Switch>
		</ScrollToTop>
	)
}

export default withRouter(App)
