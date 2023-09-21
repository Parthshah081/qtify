import React, { useState, useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as RightNav} from '../../assets/rightNav.svg';
import styles from './CarouselRightNav.module.css';

const CarouselRightNav = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
        swiper.on('slideChange', function(){
          setIsEnd(swiper.isEnd);
        })
    }, [swiper])
  return (
    <div className={styles.rightNav}>
      {!isEnd && <RightNav onClick={() => swiper.slideNext()}/> }
    </div>
  )
}

export default CarouselRightNav

