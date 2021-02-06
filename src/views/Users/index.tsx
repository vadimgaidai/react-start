import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LOAD_USERS } from '../../redux/actionTypes'

import style from './users.module.scss'

const Trial: FC = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((selector) => selector?.users)

  useEffect(() => {
    ;(async () => {
      await dispatch({ type: LOAD_USERS })
    })()
  }, [dispatch])

  return (
    <main className={style.section}>
      <h1 className={style.caption}>Users</h1>
      {users?.map((user) => (
        <p className={style.item} key={user.id}>
          {JSON.stringify(user)}
        </p>
      ))}
    </main>
  )
}

export default Trial
