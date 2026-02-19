import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/components/carousel.scss';

import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner3.jpg';
import banner3 from '../images/banner2.jpg';

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="Banner 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
