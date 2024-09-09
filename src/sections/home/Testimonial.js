import React from 'react';
import img1 from '../../assest/logo/testi.jpg';

function Testimonial() {
    return (
        <div class=" testimonial container my-5 d-flex align-items-center justify-content-center flex-column">
            <h1 className='heading mb-5'>Testimonial</h1>
            <div class="card border-0 shadow-lg  col-8  mt-5">
                <div class="card-body px-5 d-flex align-items-center justify-content-center flex-column text-center">
                    <div className=' profile shadow-lg p-1 bg-white rounded-circle'>
                        <img src={img1} alt="Profile Image" className='img-fluid rounded-circle' />
                    </div>
                    <h1>John Doe</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est. Enim fusce aliquam enim pellentesque venenatis ullamcorper phasellus massa vitae.</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import img1 from '../../assest/logo/testi.jpg';
// import img2 from '../../assest/logo/testi.jpg';


// export default function Testimonials() {
//     const testimonialData = [
//         {
//             img: img1,
//             name: "Lorem ipsum",
//             content: "Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est. Enim fusce aliquam enim pellentesque venenatis ullamcorper phasellus massa vitae."
//         },
//         // {
//         //     img: img2,
//         //     name: "Aryan Gaur",
//         //     content: "Life is a privilege, but to live life to the fullest is a choice, and that choice itself gets fulfilled being in ALC with its accomplished faculty and effective staff who cater to all the academic needs, its healthy and competent environment which keeps the students engaged in activities and its awe inspiring location in the laps of nature which would help take a retreat from worldly stress. "
//         // },


//     ]
//     return (
//         <div className='testimonials d-flex justify-content-center flex-column align-items-centersss '>
//             <h2 className='heading'>Testimonial</h2>
//             <div className='container '>

//                 <Swiper
//                     modules={[Autoplay, Pagination]}
//                     spaceBetween={100}
//                     slidesPerView={2}
//                     // autoplay={{delay:3000}}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         320: { slidesPerView: 1, spaceBetween: 20 },
//                         425: { slidesPerView: 1, spaceBetween: 20 },
//                         999: { slidesPerView: 2, spaceBetween: 20 }
//                     }}
//                 >
//                     {testimonialData.map((data, index) => (
//                         <SwiperSlide key={index}>
//                             <div className=' shadow-lg p-3 mb-5 bg-white rounded  mt-5 d-flex justify-content-center flex-column align-items-center '>
//                                 <img alt='' src={data.img} className='img-fluid rounded-circle' />
//                                 <div className='testi-detail col-lg-10 col-sm-12'>
//                                     <p className='testi-name '>{data.name}</p>
//                                     <p className='testi-content'>{data.content}</p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </div>
//         </div>
//     )
// }