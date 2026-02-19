import { SLIDER_BOXES } from "@/utils/HomePageBoxes";
import { useRef } from "react";
import SliderArrowUp from "@/assets/images/sliderArrowUp.svg?react"
import SliderArrowDown from "@/assets/images/sliderArrowDown.svg?react"
import SliderQuotes from "@/assets/images/Quotes.svg?react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { twMerge } from "tailwind-merge";

export default function ResultsDekstopSlide({ activeIndex, setActiveIndex }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative  gap-10 h-full hidden lg:flex">
      <div className="flex flex-col gap-5 justify-center">
        <button ref={prevRef} disabled={activeIndex === 0} className="rounded-full size-12 cursor-pointer bg-white shadow flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none">
          <SliderArrowUp />
        </button>
        <button ref={nextRef} disabled={activeIndex===2} className="rounded-full size-12 cursor-pointer bg-white shadow flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none">
          <SliderArrowDown />
        </button>
      </div>
      <div>
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={32}
          modules={[Navigation]}
          initialSlide={1}
          centeredSlides
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full">
          {SLIDER_BOXES.map((item) => {
            return (
              <SwiperSlide className="max-w-116.25 px-2 py-5" key={item.id}>
                <div className={twMerge("p-8 rounded-xl h-41.75 relative transition-all duration-300 ",
                  activeIndex === item.id
                    ? "bg-white shadow-[1px_1px_8px_0px_rgba(0,0,0,0.25)] opacity-100"
                    : "bg-transparent  opacity-40", item.id===1 && "h-35.5"
                )}>
                  <div className={twMerge('text-6xl max-w-110 h-10 absolute w-full lg:-top-5 lg:left-2 xl:-top-5.5 xl:left-3')}>
                    <SliderQuotes />
                  </div>
                  <p className={twMerge('text-sm xl:text-base leading-6.5 text-[rgba(32,32,32,1)]')}>{item.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
