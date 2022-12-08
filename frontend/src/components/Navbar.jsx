import React from 'react'
import logo from '../img/logo.png'

import style from "./css/Navbar.module.css"

function Navbar(props) {
  return (
    <div className={style.navbar}>
      <img className={style.nav_logo} src={logo} alt="MEMEIT?" />
      <ul className={style.nav_list}>
        <li className={style.nav_link} onClick={props.handleClick}>Logare</li>
        <li className={style.nav_link} onClick={props.handleClick}>Creare cont</li>
      </ul>
    </div>
  )
}

export default Navbar