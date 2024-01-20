import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
  return (
    <div className='menu'>
      <hr />
      <div><Link to="/profile">Профиль</Link></div> <hr />
      <div><Link to="/dm">Мессенджер</Link></div> <hr />
      <div><Link to="/friends">Друзья</Link></div> <hr />
      <div><Link to="/calls">Звонки</Link></div> <hr />

    </div>
  )
}

export default Menu