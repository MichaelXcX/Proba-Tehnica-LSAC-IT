import React from 'react'
import style from './css/UploadCard.module.css'


function UploadCard() {
  return (
    <div className={style.container}>
      <div className={style.container_text}>
        <h1>Ai tupeu și crezi că ești amuzant?</h1>
        <p>Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</p>
      </div>
      <form className={style.container_form} action="">
        <div className={style.form_descriere}>
          <label>Descriere:</label>
          <input type="text" placeholder='Descriere'/>
        </div>
        <div className={style.form_meme}>
          <label>Meme (jpg, jpeg, png, gif)</label>
          <input type="file" placeholder='drag & drop image or click to upload'/>
        </div>
        <input type="submit" value="Trimite"/>
      </form>
    </div>
  )
}

export default UploadCard