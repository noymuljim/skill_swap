// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'

export default function Banner() {
  return (
    <>
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
            <div className='rounded-tr-3xl rounded-bl-3xl flex flex-col md:justify-around md:flex-row items-center w-full  bg-gradient-to-br from-transparent via-green-700 to-transparent'>
                <div className='text-black'>
                <h1 className='font-semibold md:text-3xl md:font-bold'>The Future of Learning Is Peer-to-Peer</h1>
                <p>Skip the middleman. Teach directly. Earn instantly.</p>
                </div>
                <div>
                    <img className='w-[200px]' src={banner1} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='rounded-tr-3xl rounded-bl-3xl flex flex-col md:justify-around md:flex-row items-center w-full  bg-gradient-to-br from-transparent via-yellow-700 to-transparent'>
                <div className='text-black'>
                <h1 className='font-semibold md:text-3xl md:font-bold'>Skills Are the New Currency</h1>
                <p>Invest in knowledge — yours and others..</p>
                </div>
                <div>
                    <img className='w-[200px]' src={banner2} alt="" />
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
