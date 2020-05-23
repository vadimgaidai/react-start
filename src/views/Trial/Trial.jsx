import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { loadTestData } from '../../redux/testData/action'

import './trial.scss'

const Trial = ({ test, getTestData }) => {
	const { testData = [] } = useSelector(({ testReducer }) => testReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			await dispatch(loadTestData())
		})()
	}, [dispatch])

	return (
		<main className="trial">
			<h1 className="trial__caption">Test API</h1>
			{testData.length ? (
				testData.map((user) => (
					<p className="trial__user" key={user.id}>
						{JSON.stringify(user)}
					</p>
				))
			) : (
				<div className="trial__user">Loading...</div>
			)}
		</main>
	)
}

Trial.propTypes = {
	test: PropTypes.array,
	getTestData: PropTypes.func,
}

export default Trial
