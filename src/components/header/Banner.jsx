import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='rounded-xl text-slate-50' >
            <Swiper
                className='h-96 md:h-[600px] rounded-md'
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/198QR9L/2148748777.jpg)' }}
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-35"></div>
                        {/* Your text content */}
                        <div className="z-10 text-center">
                            <span className="text-white mb-2 inline-block md:text-5xl text-3xl font-bold">Repair Ranger</span> <br />
                            <span className='font-semibold text-xl'>Wellcome to the community of rangers <br />Find the right repair service, right away</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-cover bg-top bg-no-repeat z-0'
                    style={{ backgroundImage: 'url(https://i.ibb.co/k80ZQy6/75920.jpg)' }}
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-35"></div>
                        {/* Your text content */}
                        <div className="z-10 text-center">
                            <span className="text-white mb-2 inline-block md:text-5xl text-3xl font-bold">Repair Ranger</span> <br />
                            <span className='font-semibold text-xl'>Wellcome to the community of rangers <br />Find the right repair service, right away</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/pzhJ4GN/ricky-singh-Bds-Rtr03-Wko-unsplash.jpg)' }}
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-35"></div>
                        {/* Your text content */}
                        <div className="z-10 text-center">
                            <span className="text-white mb-2 inline-block md:text-5xl text-3xl font-bold">Repair Ranger</span> <br />
                            <span className='font-semibold text-xl'>Wellcome to the community of rangers <br />Find the right repair service, right away</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/Hqy2bHk/people-working-together-as-team.jpg)' }}
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-35"></div>
                        {/* Your text content */}
                        <div className="z-10 text-center">
                            <span className="text-white mb-2 inline-block md:text-5xl text-3xl font-bold">Repair Ranger</span> <br />
                            <span className='font-semibold text-xl'>Wellcome to the community of rangers <br />Find the right repair service, right away</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
// <div className="hero min-h-[600px] bg-base-100">
//     <div className="hero-content text-center">
//         <div className="max-w-md">
//             <h1 className="text-5xl font-bold">Repair Ranger</h1>
//             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//             <button className="btn btn-primary">Get Started</button>
//         </div>
//     </div>
// </div>