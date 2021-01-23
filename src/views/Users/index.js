import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOAD_USERS } from '../../redux/actionTypes'
import { section, caption, item } from './users.module.scss'

const Trial = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((selector) => selector?.users)

  useEffect(() => {
    ;(async () => {
      await dispatch({ type: LOAD_USERS })
    })()
  }, [dispatch])

  return (
    <main className={section}>
      <h1 className={caption}>Users</h1>
      {users?.map((user) => (
        <p className={item} key={user.id}>
          {JSON.stringify(user)}
        </p>
      ))}
    </main>
  )
}

export default Trial
