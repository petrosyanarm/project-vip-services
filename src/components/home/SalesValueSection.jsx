import { HOME_IMAGES_BOXES } from "@/utils/HomePageBoxes";
import { Link } from "react-router-dom";
import HomeImagesIcon from "@/assets/images/homeImagesIcon.svg?react";
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from "@/components/ui/SwiperContainer";
function HomeImages() {
    return (
        <div>
            <div className="w-full max-w-360 mx-auto pl-5 pt-19 lg:px-20 lg:py-25">
                <div className="flex flex-col gap-9 lg:gap-12">
                    <h1 className="text-primary text-center pr-5 lg:pr-0">We Help You Sell, Not Search</h1>
                    <div className="hidden xl:flex gap-6">
                        {HOME_IMAGES_BOXES.map((item) => {
                            const Image = item.image
                            return (
                                <div key={item.id} className="w-full relative h-98 rounded-2xl">
                                    <img className="w-full h-full absolute rounded-2xl object-cover" src={Image} />
                                    <div className="w-full h-full absolute flex items-end rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0)_25.36%,#01223D_101.45%)]">
                                        <div className="flex flex-col gap-1 w-full pl-4.5 h-14.25 pb-22">
                                            <span className="text-white text-2xl font-extrabold leading-[100%]">{item.title}</span>
                                            <div className="flex w-full pr-4.5 justify-between">
                                                <span className="text-white text-xl font-normal leading-[100%]">{item.subTitle}</span>
                                                <Link to={'/'}><HomeImagesIcon /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="xl:hidden">
                        <SwiperContainer
                            modules={[Pagination]}
                            slidesPerView={4}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.9,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            spaceBetween={19}
                            pagination
                            className="flex! flex-col gap-7"
                        >
                            {HOME_IMAGES_BOXES.map((item) => {
                                const Image = item.image
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className="w-full relative h-65 rounded-2xl">
                                            <img className="w-full h-full absolute rounded-2xl object-cover" src={Image} />
                                            <div className="w-full h-full absolute flex items-end rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0)_25.36%,#01223D_101.45%)]">
                                                <div className="flex flex-col gap-1 w-full pl-3 h-8.75 pb-16">
                                                    <span className="text-white text-sm xl:text-2xl font-extrabold leading-[100%]">{item.title}</span>
                                                    <div className="flex w-full pr-2 justify-between items-center">
                                                        <span className="text-white text-xs xl:text-xl font-normal leading-[100%]">{item.subTitle}</span>
                                                        <Link to={'/'}><HomeImagesIcon className='size-4' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </SwiperContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeImages;