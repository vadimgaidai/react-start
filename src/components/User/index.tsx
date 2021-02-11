import { FC } from 'react'
import { UserProps } from './types'

import style from './user.module.scss'

const User: FC<UserProps> = ({ firstName, lastName, avatar }: UserProps) => (
  <div className={style.card}>
    <img
      className={style.avatar}
      src={avatar}
      alt={`${firstName} ${lastName}`}
    />
    <h3 className={style.name}>
      {firstName} {lastName}
    </h3>
  </div>
)

export default User
