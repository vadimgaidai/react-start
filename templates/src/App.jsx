import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore'
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

// Components
import Header from './components/header'
import Footer from './components/footer'


// Pages
import Index from './pages/index'
import TestPage from './pages/test'

// Redux
const initialState = {}
const store = configureStore(initialState)

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
         <ConnectedRouter history={history}>
          <Header/>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/test" component={TestPage} />
            </Switch>
          </ScrollToTop>
          <Footer/>
        </ConnectedRouter>
      </Provider>
    )
  }
}
