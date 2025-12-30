import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

export default function TrainingSlider({ trainingsData, img1 }) {
  return (
    <section className="flex flex-col items-center justify-center poppins-regular w-full gap-8 mx-auto py-10">
      <Swiper
        // modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerGroup={1}
        grabCursor={true}
        arrow={false}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-10/12"
      >
        {trainingsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow-md overflow-hidden flex flex-col items-center justify-center">
              {/* 5×7 Image */}
              <div className="w-full aspect-[5/7]">
                <img
                  src={img1}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 text-center flex flex-col items-center justify-center py-4">
                <h3 className="text-xl poppins-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base poppins-regular leading-relaxed">
                  {item.description.slice(0, 100)}...
                </p>
                <button className="mt-8 inline-flex items-center bg-[#DD1111] hover:bg-red-700 transition px-8 py-4 rounded-none uppercase tracking-widest font-semibold">
                  READ MORE
                  <span className="ml-3">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
