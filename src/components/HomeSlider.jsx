import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2025",
    desc: "We know how large objects will act, but things on a small scale.",
    image: "https://via.placeholder.com/400x400?text=Hero+1",
    bg: "bg-cyan-500",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    desc: "We know how large objects will act, We know how are objects will act, We know",
    image: "https://via.placeholder.com/400x400?text=Hero+2",
    bg: "bg-customGreen", // özel tanımlı renk
    price: "$16.48",
    buttonText: "ADD TO CART",
  }
  
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[500px]">
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className={`keen-slider__slide flex flex-col md:flex-row items-center justify-between ${slide.bg} px-6 md:px-20 py-10`}
          >
            {/* Sol Yazılar */}
            <div className="text-white max-w-md text-center md:text-left">
              <p className="text-sm tracking-wider mb-2">{slide.subtitle}</p>
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-sm mb-4">{slide.desc}</p>

              {slide.price && (
                <p className="text-lg font-semibold mb-2">{slide.price}</p>
              )}

              <button className="bg-green-500 text-white px-6 py-2 text-sm font-semibold hover:bg-green-600 transition">
                {slide.buttonText}
              </button>
            </div>

            {/* Sağ Görsel */}
            <div className="mt-6 md:mt-0 w-full md:w-[400px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Ok Butonları */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <ArrowRight size={20} />
      </button>

      {/* Dotlar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
