// import React from 'react'
import { Link } from "react-router-dom";
const MobileMenu = ({ menu }) => {
  return (
    <div>
      <li>
        <Link to={menu.url}>{menu.name}</Link>
      </li>
    </div>
  )
}

export default MobileMenu
