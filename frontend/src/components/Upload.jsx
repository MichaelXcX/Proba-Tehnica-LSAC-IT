import React from 'react'
import UploadCard from './UploadCard'

import style from './css/Upload.module.css'

function Upload() {
  return (
    <div className={style.wrapper}>
        <UploadCard />
    </div>
  )
}

export default Upload