import React, { useState } from 'react'
import { section, caption, icon, item } from './users.module.scss'

const Trial = () => {
  const [users, setUsers] = useState([])
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
