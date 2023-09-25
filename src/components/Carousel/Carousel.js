import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import CarouselLeftNav from './CarouselLeftNav';
import CarouselRightNav from './CarouselRightNav';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Carousel = ({ data, cardRender }) => {
    const Controls = ({ data }) => {
        const swiper = useSwiper();
        
        useEffect(() => {
            swiper.slideTo(0, null)
        }, [data, swiper])
        return <></>
    }
    return (
        <div className={styles.carouselWrapper}>
            <Swiper 
            style={{ padding: '0px 20px' }} 
            initialSlide={0}
            modules={Navigation} 
            slidesPerView={'auto'}
            spaceBetween={40} 
            allowTouchMove
             >
                <Controls data={data} />
                <CarouselLeftNav />
                <CarouselRightNav />
                {
                    data.map((item) => {
                        return (
                            <SwiperSlide>{cardRender(item)}</SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel;