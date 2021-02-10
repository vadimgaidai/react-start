import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { User, UsersActionsType } from '../../redux/users/types'
import { selectIsUsersLoading, selectUsers } from '../../redux/users/selectors'

import style from './users.module.scss'

const Trial: FC = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(selectIsUsersLoading)
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
  }, [dispatch])

  return (
    <main className={style.section}>
      <h1 className={style.caption}>Users</h1>
      {!isLoading ? (
        users?.map((user: User) => (
          <p className={style.item} key={user.id}>
            {JSON.stringify(user)}
          </p>
        ))
      ) : (
        <p>Loading</p>
      )}
    </main>
  )
}

export default Trial
