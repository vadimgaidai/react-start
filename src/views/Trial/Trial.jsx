import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { loadTestData } from '../../redux/testData/action'
import './index.scss'

const Trial = ({ test, getTestData }) => {
	const { testData = [] } = useSelector(({ testReducer }) => testReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			await dispatch(loadTestData())
		})()
	}, [dispatch])

	return (
		<div className="trial">
			<h1>Trial page</h1>
			{testData.length ? (
				testData.map((user) => (
					<span key={user.id}>{JSON.stringify(user)}</span>
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}

Trial.propTypes = {
	test: PropTypes.array,
	getTestData: PropTypes.func,
}

export default Trial
