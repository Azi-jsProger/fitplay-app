import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import slidesData from '../event/event'; // Импорт данных
import cls from './style.module.css';

const Slider = () => {
    return (
        <div className={cls.sliderContainer}>
            <Swiper
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20} // Пространство между слайдами
                breakpoints={{
                    390: {
                        slidesPerView:3,
                    },
                    400: {
                        slidesPerView:3,
                    },
                    640: {
                        slidesPerView: 1, // Для маленьких экранов
                    },
                    768: {
                        slidesPerView: 2, // Для средних экранов
                    },
                    1024: {
                        slidesPerView: 3, // Для больших экранов
                    },
                    1200: {
                        slidesPerView: 4, // Для очень больших экранов
                    },
                }}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {slidesData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={cls.div}>
                            <img src={item.image} alt={`Слайд ${item.id}`} />
                            <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;


// import React from 'react';
// import 'swiper/css';
// import {Swiper, SwiperSlide} from "swiper/react";
// import cls from './style.module.css'
// import slidesData from '../event/event'
//
// const Slider = () => {
//     return (
//         <div>
//             <Swiper
//                 spaceBetween={0}
//                 slidesPerView={4}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 {slidesData.map((item,idx) => {
//                     return (
//                         <div key={idx}>
//                             <SwiperSlide>
//                                 <div className={cls.div}>
//                                     <img src={item.image} alt=""/>
//                                     <p>{item.text}</p>
//                                 </div>
//                             </SwiperSlide>
//                         </div>
//                     )
//                 })}
//                       ...
//             </Swiper>
//         </div>
//     );
// };
//
// export default Slider;