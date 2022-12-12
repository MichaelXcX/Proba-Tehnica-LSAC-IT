import React, { useState } from 'react'
import Popup from './Popup';
import logo from '../img/logo.png'

import style from "./css/Navbar.module.css"

function Navbar() {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);

  const handlePopup = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={style.navbar}>
        <img className={style.nav_logo} src={logo} alt="MEMEIT?" />
        <ul className={style.nav_list}>
          {/*
             Aici daca vrei sa apelezi o singura functie ai putea sa ii dai lui handlePopup ca parametru 
             "login" si "register" si sa apelezi acolo setType
          */}
          <li className={style.nav_link} onClick={() => { handlePopup(); setType("login") }}>Logare</li>
          <li className={style.nav_link} onClick={() => { handlePopup(); setType("register") }}>Creare cont</li>
        </ul>
      </div>
      <Popup type={type} status={open} setStatus={setOpen}></Popup>
    </>
  )
}

export default Navbar