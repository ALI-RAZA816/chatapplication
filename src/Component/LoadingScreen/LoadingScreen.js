import React from 'react';
import style from './LoadingScreen.module.css'

export default function LoadingScreen() {
    return (
        <div className={style.splashcontainer} >
            <div className={style.splashCircle}></div>
            <img src="./images/wh Logo Trns BG 2.png" alt="" />
        </div>
    )
}
