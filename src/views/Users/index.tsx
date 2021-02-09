import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { UsersActionsType } from '../../redux/users/types'
import { setUsers } from '../../redux/users'
import { selectIsUsersLoading, selectUsers } from '../../redux/users/selectors'

import style from './users.module.scss'

const Trial: FC = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(selectIsUsersLoading)
  const users = useSelector(selectUsers)

  useEffect((): any => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
    return () => dispatch(setUsers([]))
  }, [dispatch])

  return (
    <main className={style.section}>
      <h1 className={style.caption}>Users</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        users?.map((user: { id: number }) => (
          <p className={style.item} key={user.id}>
            {JSON.stringify(user)}
          </p>
        ))
      )}
    </main>
  )
}

export default Trial
