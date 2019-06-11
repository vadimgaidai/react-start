import React from 'react'
import { connect } from 'react-redux'
import { SetTest } from '../../store/test/action'
import Main from '../../components/main'


const mapState = (state) => {
  return {
    test: state.test.user
  }
}
const mapDispatch = {
  SetTest
}

class MainContainer extends React.Component {
  async componentDidMount() {
    await this.props.SetTest()
  }
  render() {
    return(
      <Main
        test={this.props.test}
      />
    )
  }
}


export default connect(mapState, mapDispatch)(MainContainer)