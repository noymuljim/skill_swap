import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'



export default function HeroSection() {
    return (
        <section className="w-full h-screen">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >





                <SwiperSlide>
                    <div class="h-124 flex justify-around items-center p-10 bg-gradient-to-r from-transparent via-green-500 to-transparent">
                        <div className='left space-y-6'>
                            <h1 className='text-3xl font-bold text-black'>Turn Your Skills Into Income</h1>
                            <p className='text-black'>Share your expertise, connect with learners, and grow your personal brand</p>
                        </div>
                        <div className='right'>
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="h-124 flex justify-around items-center p-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent">
                        <div className='left space-y-6'>
                            <h1 className='text-3xl font-bold text-black'>Skills Are the New Currency</h1>
                            <p className='text-black'>Invest in knowledge — yours and others</p>
                        </div>
                        <div className='right'>
                            <img src={banner1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}
