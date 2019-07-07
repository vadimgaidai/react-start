import React from 'react'
import { connect } from 'react-redux'
import { SetTest } from '../../store/test/action'
import Test from '../../components/test'


const mapState = (state) => {
  return {
    test: state.test.user
  }
}
const mapDispatch = {
  SetTest
}

class TestContainer extends React.Component {
  async componentDidMount() {
    await this.props.SetTest()
  }
  render() {
    return(
      <Test
        test={this.props.test}
      />
    )
  }
}


export default connect(mapState, mapDispatch)(TestContainer)