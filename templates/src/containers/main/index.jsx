import React from 'react'
import { connect } from 'react-redux'
import { SetTest } from '../../store/test/action'
import Main from '../../components/main'


const mapState = (state) => {
  console.log(state.test)
  return {
    test: state.test
  }
}
const mapDispatch = {
  SetTest
}

class MainContainer extends React.Component {
  render() {
    return(
      <Main
        test={this.props.test}
      />
    )
  }
}


export default connect(mapState, mapDispatch)(MainContainer)