import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assest/gallary/client1.png';
import img2 from '../../assest/gallary/client2.png';
import img3 from '../../assest/gallary/client3.png';

const Clients = () => {
    return (
        <div className="p-5  ">
            <div className='d-flex align-items-center justify-content-center'>
                <h1 className='heading '>Our Top Clients</h1>
            </div>
            <div className='content'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },

                    }
                    }
                >
                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto" src={img1} alt="First slide" />
                            <h2>Tata Motors</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto p-1" src={img2} alt="Second slide" />
                            <h2>OMax</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto" src={img3} alt="Third slide" />
                            <h2>InfoTech</h2>
                            <p >Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto" src={img3} alt="Third slide" />
                            <h2>InfoTech</h2>
                            <p >Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto p-1" src={img2} alt="Second slide" />
                            <h2>OMax</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center p-lg-5">
                            <img className="d-block col-5 img-fluid mx-auto" src={img1} alt="First slide" />
                            <h2>Tata Motors</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div >
    );
};

export default Clients;