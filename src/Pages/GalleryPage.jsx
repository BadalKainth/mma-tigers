import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpeg";
import g7 from "../images/g7.png";
import g8 from "../images/g8.jpeg";
import g9 from "../images/g9.jpeg";
import g10 from "../images/g10.jpeg";
import g11 from "../images/g11.jpeg";
import g12 from "../images/g12.jpeg";
import g13 from "../images/g13.jpeg";
import g14 from "../images/g14.jpeg";
import g15 from "../images/g15.jpeg";
import g16 from "../images/g16.jpeg";
import g17 from "../images/g17.jpeg";
import g18 from "../images/g18.jpeg";
import g19 from "../images/g19.jpeg";
import g20 from "../images/g20.jpeg";
import g21 from "../images/g21.jpeg";
import g22 from "../images/g22.jpeg";
import g23 from "../images/g23.jpeg";
import g24 from "../images/g24.jpeg";
import g25 from "../images/g25.jpeg";
import g26 from "../images/g26.jpeg";
import g27 from "../images/g27.png";
import g28 from "../images/g28.png";
import g29 from "../images/g29.png";
import g30 from "../images/g30.png";
import g31 from "../images/g31.png";
import g32 from "../images/g32.png";
import g33 from "../images/g33.png";
import g34 from "../images/g34.png";
import g35 from "../images/g35.png";
import g36 from "../images/g36.png";
import g37 from "../images/g37.png";
import { useState } from "react";

const images = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g26,
  g27,
  g28,
  g29,
  g30,
  g31,
  g32,
  g33,
  g34,
  g35,
  g36,
  g37,
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-full min-h-screen bg-black text-white p-6">
      <p className="text-lg md:text-xl opacity-90 max-w-5xl mx-auto text-center pb-10 poppins-regular">
        Fitness • Self-Defense • Strength • Speed • Competition • Kids • Women •
        Adults
      </p>
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full rounded-lg shadow-md hover:shadow-lg mb-3 break-inside-avoid-column object-cover cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            loading="lazy"
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
