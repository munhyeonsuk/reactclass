import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import datainfo from './data/db.json';


const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {
              datainfo.banner.map((v, i) => (
                  <SwiperSlide key={i} className={v.cls}>{v.atext}</SwiperSlide>
              ))
            }
        </Swiper>
    );
}

export default Banner;
