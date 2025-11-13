import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router';

const HeroSlider = () => {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1692600681037-547f598a1b38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1706')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-xl max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Drive Your Dream Car Today
              </h1>
              <p className="text-lg mb-6">
                Choose from luxury sedans, sporty convertibles, and family SUVs — all at unbeatable prices.
              </p>
              <Link to={'/browse-cars'} className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-400 transition">
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-xl max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Affordable Rates, Premium Experience
              </h1>
              <p className="text-lg mb-6">
                Enjoy flexible rental options, 24/7 customer support, and free pick-up & drop-off.
              </p>
              <Link to={'/browse-cars'} className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-400 transition">
                View Pricing
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1760486569714-1eef90e634f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
            }}
          >
            <div className="bg-black/50 p-8 rounded-xl max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Safe, Clean & Reliable Cars
              </h1>
              <p className="text-lg mb-6">
                Every car is sanitized and inspected before each trip — your safety is our top priority.
              </p>
              <Link to={'/browse-cars'} className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-400 transition">
                Explore Fleet
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
