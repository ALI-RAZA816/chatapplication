import { useState, useEffect} from 'react'
import style from './Slides.module.css'

export default function Slides() {

    const [activeIndex, setActiveIndex] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className={style.slidesContainer}>
            <div className={style.slidesBox}>
                <div className={`${style.slides} ${activeIndex === 1 ? `${style.show}`: ' '}`}>
                    <img src="./images/5.png" alt="" />
                    <img src="./images/1.png" alt="" />
                </div>
                <div className={`${style.slides} ${activeIndex === 2 ? `${style.show}`: ' '}`}>
                    <img src="./images/5.png" alt="" />
                    <img src="./images/2.png" alt="" />
                </div>
                <div className={`${style.slides} ${activeIndex === 3 ? `${style.show}`: ' '}`}>
                    <img src="./images/5.png" alt="" />
                    <img src="./images/3.png" alt="" />
                </div>
            </div>
            <div className={style.indicators}>
                <div className={`${style.indicatorsBtn} ${activeIndex === 1 ? `${style.activeBtn}`: ' '}`}></div>
                <div className={`${style.indicatorsBtn} ${activeIndex === 2 ? `${style.activeBtn}`: ' '}`}></div>
                <div className={`${style.indicatorsBtn} ${activeIndex === 3 ? `${style.activeBtn}`: ' '}`}></div>
            </div>
        </div>
    )
}
