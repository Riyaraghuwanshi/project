import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photos = [
  {
    url: "/home/home1.jpg",
    title: "Team Collaboration",
    description: "Working together on challenging projects",
  },
  {
    url: "/home/home2.png",
    title: "Coding Session",
    description: "Students engaged in intensive coding practice",
  },
  {
    url: "/home/home3.png",
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced developers",
  },
  {
    url: "/home/home4.png",
    title: "Workshop Session",
    description: "Students engaged in intensive coding practice",
  },
  {
    url: "/images/slider5.jpg",
    title: "Innovators Online Lab",
    description: "Empowering ideas, transforming into innovations",
  },
  {
    url: "/images/slider6.JPG",
    title: "Guiding Lights",
    description: "Professors and volunteers together",
  },
  {
    url: "/images/slider7.png",
    title: "Coding Session",
    description: "Students engaged in intensive coding practice",
  },
  {
    url: "/images/slider8.JPG",
    title: "Team Collaboration",
    description: "Working together on challenging projects",
  },
  {
    url: "/images/slider9.png",
    title: "Online Bootcamp",
    description: "Skill sprint bootcamp",
  },
  {
    url: "/images/slider10.jpg",
    title: "Coding Quest",
    description: "Your pathway to programming mastery",
  },
];

function App() {
  const [sliderSize, setSliderSize] = useState(80); // Default size percentage

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient-x">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-24 md:py-28 lg:py-32">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-title">
              Empowering Juniors,
              <span className="block text-indigo-400 mt-2 animate-gradient-text">
                Led by Seniors
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
              Join TIT Developer Community and be part of a thriving ecosystem
              where seniors mentor juniors, creating the next generation of tech
              leaders.
            </p>
            <div className="space-y-4">
              <a
                href="#join-us"
                className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105 transform"
              >
                Join Us Now
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
              </a>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <label htmlFor="size-slider" className="text-white text-sm">
                  Adjust Slider Size: {sliderSize}%
                </label>
                <input
                  type="range"
                  id="size-slider"
                  min="60"
                  max="100"
                  value={sliderSize}
                  onChange={(e) => setSliderSize(Number(e.target.value))}
                  className="w-48 h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right side - Photo Slider */}
          <div className="block mt-8 lg:mt-0 animate-fade-in">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                },
              }}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
              className="w-full mx-auto transition-all duration-300 ease-in-out"
              style={{
                maxWidth: `${sliderSize}%`,
              }}
            >
              {photos.map((photo, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full"
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <div className="relative group overflow-hidden rounded-xl shadow-2xl h-full transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">
                          {photo.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
