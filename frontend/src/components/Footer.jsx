import React from 'react'
import { FaTwitch } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'
import { GrFacebook } from 'react-icons/gr'
import style from "./css/Footer.module.css"


function Footer() {
  return (
    <div className={style.container}>
        <div className={style.links}>
            <a href="https://www.instagram.com/lsacbucuresti/"><SiInstagram /></a>
            <a href="https://www.twitch.tv/lsac_bucuresti"><FaTwitch /></a>
            <a href="https://www.facebook.com/LsacBucuresti/"><GrFacebook /></a>
        </div>
        <div className={style.copyright}>
            <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
        </div>
    </div>
  )
}

export default Footer