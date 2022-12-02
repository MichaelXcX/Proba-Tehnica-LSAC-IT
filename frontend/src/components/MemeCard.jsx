import React from 'react'
import style from './css/MemeCard.module.css'

function MemeCard(props) {
  return (
    <div className={style.container}>
        <img src={props.image} alt={props.alt} />
    </div>
  )
}

export default MemeCard