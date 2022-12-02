import React from 'react'
import image1 from '../img/image 1.png'
import image2 from '../img/image 2.png'
import image3 from '../img/image 3.png'
import style from "./css/MostViewed.module.css"
import MemeCard from './MemeCard'

const data = { image1, image2, image3 }

function MostViewed() {
  return (
    <div className={style.wrapper}>
        <h1>Most Viewed</h1>
        <div className={style.memes}>
            {/* {Array.isArray(data) ? data.map((elem, idx) => {
                return <MemeCard image={elem} alt={idx}/>
             }) : <></>
            } */}
            <MemeCard image={image1} alt="Image1" />
            <MemeCard image={image2} alt="Image1" />
            <MemeCard image={image3} alt="Image1" />
        </div>
    </div>
  )
}

export default MostViewed