import React, { useContext } from 'react'
import { userContext } from '../../../App'

const Profile = () => {
  const {user} = useContext(userContext)
  return (
    <div>
        <div>Моя страница</div>
        <div>{user.name}</div>
    </div>
  )
}

export default Profile