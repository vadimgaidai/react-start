import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { loadData } from '../../redux/data/action'

import Api from '../../icons/Api'

import { section, caption, icon, item } from './trial.module.scss'

const Trial = ({ test, getTestData }) => {
	const { data } = useSelector(({ testReducer }) => testReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			await dispatch(loadData())
		})()
	}, [dispatch])

	return (
		<main className={section}>
			<h1 className={caption}>Test {<Api className={icon} />} API</h1>
			{data?.map((user) => (
				<p className={item} key={user.id}>
					{JSON.stringify(user)}
				</p>
			))}
		</main>
	)
}

Trial.propTypes = {
	test: PropTypes.array,
	getTestData: PropTypes.func,
}

export default Trial
