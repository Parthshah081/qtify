import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import {ReactComponent as LeftNav} from '../../assets/leftNav.svg';
import styles from './CarouselLeftNav.module.css';


const CarouselLeftNav = () => {
    const swiper = useSwiper();
    const [isBegining,setIsBegining] = useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange",function() {
                setIsBegining(swiper.isBeginning);
        })
    },[swiper])
  return (
    <div className={styles.leftNav}>
        {!isBegining && <LeftNav onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNav;