import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore'
import Header from './components/header'
import MainContainer from './containers/main'
import Footer from './components/footer'

const initialState = {}
const store = configureStore(initialState)

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
         <ConnectedRouter history={history}>
          <Header/>
          <MainContainer/>
          <Footer/>
        </ConnectedRouter>
      </Provider>
    )
  }
}
