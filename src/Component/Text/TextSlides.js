import {useState,useEffect} from 'react'
import style from './TextSlides.module.css'
export default function TextSlides() {
     const [activeIndex, setActiveIndex] = useState(1);
        useEffect(() => {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
            }, 5000);
    
            return () => clearInterval(interval); // Cleanup on unmount
        }, []);
  return (
    <div className={style.textContainer}>
      <div className={`${style.textSlides} ${activeIndex === 1 ? `${style.show}`: ' '}`}>
        <h4>Welcome to MERQ</h4>
        <p>Buying and selling made as easy as chatting.</p>
      </div>
      <div className={`${style.textSlides} ${activeIndex === 2 ? `${style.show}`: ' '}`}>
        <h4>Shop Smarter</h4>
        <p>just type what you need, and explore personalized product picks.</p>
      </div>
      <div className={`${style.textSlides} ${activeIndex === 3 ? `${style.show}`: ' '}`}>
        <h4>Sell with Ease</h4>
        <p>List your items, connect with buyers, and close deals effortlessly.</p>
      </div>
    </div>
  )
}
