/* eslint-disable no-tabs */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTestData } from '../../redux/testData/action'

const Trial = ({ test, getApi }) => {
	useEffect(() => {
		getApi()
	}, [getApi])
	return (
		<div>
			<h1>Trial page</h1>
			{test.map((user) => {
				return <div key={user.id}>{Object.values(user)}</div>
			})}
		</div>
	)
}

Trial.propTypes = {
	test: PropTypes.array,
	getApi: PropTypes.func,
}

const mapState = ({ testReducer }) => {
	return {
		test: testReducer?.testData,
	}
}

const mapActions = (dispatch) => {
	return {
		getApi: () => dispatch(loadTestData()),
	}
}

export default connect(mapState, mapActions)(Trial)
