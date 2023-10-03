import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Members from '../Data/Members';

const Member = () => {
    return (
        <div className="member">
            <div className="member-text">
                <h2>Member Access Pass</h2>
                <Link to="/">Learn more</Link>
            </div>
            <div className="slider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Pagination]} className="mySwiper"
                >
                    {Members && Members.map((mem) => (
                        <SwiperSlide>
                            <div className="card">
                                <img className={mem.class} src={mem.image} alt="" />
                                <span>{mem.name}</span>
                                <p>{mem.description}</p>
                                <div className="btn1">
                                    details
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
        </div>

    )
}

export default Member