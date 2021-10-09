import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <div className="navbar-container">
        <Link className="white-color" to="/">
          Pay Invoice
        </Link>
      </div>
    </div>
  )
}

export default Menu
