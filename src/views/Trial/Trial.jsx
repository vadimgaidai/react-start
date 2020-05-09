import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Trial = () => {
	return <div>Trial page</div>
}

Trial.propTypes = {
	test: PropTypes.array,
}

const mapState = ({ testReducer }) => {
	return {
		test: testReducer?.testData,
	}
}

export default connect(mapState, null)(Trial)
