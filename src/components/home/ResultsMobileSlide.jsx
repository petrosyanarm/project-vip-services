import SwiperContainer from '@/components/ui/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { twMerge } from 'tailwind-merge';
import SliderQuotes from "@/assets/images/Quotes.svg?react"
import { SLIDER_BOXES } from '@/utils/HomePageBoxes';

function ResultsMobileSlide({ activeIndex, setActiveIndex }) {
    return (
        <div className='lg:hidden'>
            <SwiperContainer
                modules={[Pagination]}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={8}
                pagination
                initialSlide={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="flex! flex-col gap-4 overflow-visible"
            >
                {SLIDER_BOXES.map((item) => (
                    <SwiperSlide key={item.id} className='py-8 px-3'>
                        <div className={twMerge(activeIndex === item.id
                            ? "bg-white  opacity-100"
                            : "bg-transparent opacity-40 blur-[1px]", ' flex flex-col gap-6')}>
                            <div className="flex flex-col gap-7 bg-white rounded-xl shadow-[13px_15px_55.5px_0px_rgba(0,0,0,0.26)] px-1.5 py-4 pb-9">
                                <div className="min-h-50 h-full  bg-[rgba(237,224,192,1)] rounded-xl flex justify-center items-center">
                                    <img src={item.image} className='max-h-50 h-full object-contain' />
                                </div>
                                <div className='px-3.5 flex flex-col justify-center items-center gap-3'>
                                    <h4 className='text-primary text-2xl font-semibold leading-[100%]'>{item.name}</h4>
                                    <span className='text-[rgba(128,128,128,1)] font-manrope text-normal text-[8px] leading-[100%]'>{item.role}</span>
                                </div>
                            </div>
                            <div className={twMerge("px-5 max-h-28.75 h-full py-5.5 mx-auto rounded-xl relative transition-all duration-300 bg-white shadow-lg scale-100 opacity-100",)}>
                                <div className='absolute w-full h-10 -top-4 left-2 '>
                                    <SliderQuotes className='size-9' />
                                </div>
                                <p
                                    className={twMerge('text-sm text-[rgba(32,32,32,1)] line-clamp-3')}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperContainer>
        </div>
    )
}
export default ResultsMobileSlide;