import React from 'react';
import './Shades.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import shade1 from '../../../assets/Shades/shade (1).jpeg'
import shade2 from '../../../assets/Shades/shade (2).jpeg'
import shade3 from '../../../assets/Shades/shade (3).jpeg'
import shade4 from '../../../assets/Shades/shade (4).jpeg'
import shade5 from '../../../assets/Shades/shade (5).jpeg'
import shade6 from '../../../assets/Shades/shade (6).jpeg'

const Shades = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-semibold italic text-center '>Shades</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 2.5
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="swiper_container"
            >
                <SwiperSlide><img src={shade1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={shade2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={shade3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={shade4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={shade5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={shade6} alt="" /></SwiperSlide>

                {/* <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div> */}

            </Swiper>
        </div >

    );
};

export default Shades;