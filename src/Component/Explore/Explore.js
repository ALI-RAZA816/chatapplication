import {useState} from 'react'
import { Link } from "react-router-dom";
import style from './Explore.module.css'
export default function Explore() {
    const [showDesc , setDesc] = useState(false);
    const showDescription = ()=>{
        setDesc(!showDesc);
    }
  return (
    <div className={style.container}>
        <div className={style.backBtn}>
            <Link to="/"><i className='fa-solid fa-angle-left'></i></Link>
        </div>
        <div className={style.imgBox}>
            <img src="./images/4.png" alt="" />
            <div className={style.info}>
                <i className='fa-solid fa-info' onClick={showDescription}></i>
            </div>
            <div className={`${style.infoDescription} ${showDesc === false ? ' ': `${style.descShow}`}`}>
                <span>How to Use MERQY</span>
                <p>Just like chatting with your friends, type what you are looking for and send</p>
            </div>
        </div>
        <div className={style.content}>
            <h4>Hi, I'm Merqy</h4>
            <p>I will be your personal guide to make your experience, shopping or selling, seamless.</p>
            <button>Explore MERQ</button>
        </div>
        <a href="/">I want to sell on MERQ</a>
    </div>
  )
}
