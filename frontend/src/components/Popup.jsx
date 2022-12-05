import React from 'react'
import logo from '../img/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import style from './css/Popup.module.css';

function Popup() {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.navbar}>
                <img src={logo} alt="logo" />
                <IoIosCloseCircle className={style.close_btn} />
            </div>
            <div className={style.container_form}>
                <h2>Welcome</h2>
                <form className={style.form} action="">
                    <label>
                        Username:
                        <input className={style.form_input} type="text" placeholder="username"/>
                    </label>
                    <label>
                        Email:
                        <input className={style.form_input} type="email" placeholder="email"/>
                    </label>
                    <label>
                        Password:
                        <input className={style.form_input} type="password" placeholder="password"/>
                    </label>
                    <input className={style.signup_btn} type="submit" name="signup" id="signup" value="Creare cont"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Popup