import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { UserType, UsersActionsType } from '../../redux/users/types'
import { selectUsers } from '../../redux/users/selectors'

import User from '../../components/User'

import style from './users.module.scss'
import Loader from '../../components/Loader'

const Trial: FC = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
  }, [dispatch])

  return (
    <main className={style.section}>
      <h1 className={style.caption}>Users</h1>
      <Loader loading={users.length === 0}>
        <div className={style.grid}>
          {users?.map(
            ({
              id,
              avatar,
              first_name: firstName,
              last_name: lastName,
            }: UserType) => (
              <User
                key={id}
                avatar={avatar}
                firstName={firstName}
                lastName={lastName}
              />
            )
          )}
        </div>
      </Loader>
    </main>
  )
}

export default Trial
