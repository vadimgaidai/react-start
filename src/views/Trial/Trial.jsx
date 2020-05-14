import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTestData } from '../../redux/testData/action'

const Trial = ({ test, getTestData }) => {
	useEffect(() => {
		;(async () => {
			await getTestData()
		})()
	}, [getTestData])

	return (
		<div>
			<h1>Trial page</h1>
			{test.map((user) => (
				<div key={user.id}>{Object.values(user)}</div>
			))}
		</div>
	)
}

Trial.propTypes = {
	test: PropTypes.array,
	getTestData: PropTypes.func,
}

const mapState = ({ testReducer }) => {
	return {
		test: testReducer?.testData,
	}
}

const mapActions = (dispatch) => {
	return {
		getTestData: () => dispatch(loadTestData()),
	}
}

export default connect(mapState, mapActions)(Trial)
