import React from 'react'
import salty from '../img/salty.png'

import style from './css/Salty.module.css'

// =))))
function Salty() {
  return (
    <div className={style.container}>
        <div className={style.container_upload}>
            <h1 className={style.container_title}>Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>
            <p>Platforma ideală pentru studenții de la Politehnică, 
amuzați de câte materii o să pice semestrul asta.</p>
            <button className={style.upload}>Upload a MEME</button>
        </div>
        <div className={style.container_salty}>
            <img className={style.salty}src={salty} alt="salty" />
        </div>
    </div>
  )
}

export default Salty