import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";

export default function TrainingSlider({ trainingsData }) {
  const navigate = useNavigate();

  const handleCardClick = (itemId) => {
    navigate(`/training-programs/${itemId}`);
  };

  return (
    <section className="flex flex-col items-center justify-center poppins-regular w-full gap-8 mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        slidesPerGroup={1}
        grabCursor={true}
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
            <div
              onClick={() => handleCardClick(item.id)}
              className="bg-white shadow-md overflow-hidden flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              {/* 5×7 Image */}
              <div className="w-full h-full aspect-[5/7]">
                <img
                  src={item.img}
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item.id);
                  }}
                  className="mt-8 inline-flex items-center bg-[#DD1111] hover:bg-red-700 transition px-8 py-4 rounded-none uppercase tracking-widest font-semibold"
                >
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
