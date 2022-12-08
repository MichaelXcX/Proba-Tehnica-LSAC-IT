import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import style from './css/Popup.module.css';

function Popup(props) {
    const [status, setStatus] = useState(""); 
    useEffect(()=>{
            setStatus(props.status);

    }, [])

    function handlePopup(event) {
        event.preventDefault();
        if(status === "open")
            setStatus("close");
    }

  return (
    <div className={`${style.wrapper} ${ status === "close" ? style.closed : ""}`}>
        <div className={style.container}>
            <div className={style.navbar}>
                <img src={logo} alt="logo" />
                <IoIosCloseCircle className={style.close_btn} onClick={handlePopup}/>
            </div>
            <div className={style.container_form}>
                <h2>Welcome { props.popupType ==="login" ? "back!" : "!" }</h2>
                <form className={style.form} action="">
                    { props.popupType === "register" ? 
                        <>
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
                        </>
                        :<>
                            <label>
                                Username:
                                <input className={style.form_input} type="text" placeholder="username"/>
                            </label>
                            <label>
                                Password:
                                <input className={style.form_input} type="password" placeholder="password"/>
                            </label>
                            <input className={style.signup_btn} type="submit" name="signup" id="signup" value="Conecteaza-te"/>
                        </>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Popup