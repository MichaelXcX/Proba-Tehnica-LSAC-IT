import React from 'react'
import logo from '../img/logo.png'

import style from "./css/Navbar.module.css"

function Navbar() {
  return (
    <div className={style.navbar}>
      <img className={style.nav_logo} src={logo} alt="MEMEIT?" />
      <ul className={style.nav_list}>
        <li className={style.nav_link}>Logare</li>
        <li className={style.nav_link}>Creare cont</li>
      </ul>
    </div>
  )
}

export default Navbar