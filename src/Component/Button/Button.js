import React from 'react';
import {Link} from "react-router-dom";
import style from './Button.module.css'
export default function Button() {
  return (
    <div className={style.button}>
      <Link to="/explore"><button>Get Started</button></Link>
    </div>
  )
}
