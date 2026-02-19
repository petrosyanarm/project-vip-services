import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { TOOLS_SWIPER_IMAGES } from "@/utils/HomePageBoxes";
import SwiperContainer from "@/components/ui/SwiperContainer";
function ToolsCompatibility() {
    return (
        <div className="pl-5 lg:px-10 pt-22">
            <div className="max-w-339.25 w-full mx-auto flex flex-col gap-12">
                <div className="max-w-137.5 w-full mx-auto text-center pr-2 lg:pr-0">
                    <h1>Compatible with Your Tools</h1>
                </div>
                <div className="flex lg:gap-8">
                    <SwiperContainer
                        modules={[Pagination]}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.3,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        className="flex! flex-col gap-8"
                    >
                        {[...TOOLS_SWIPER_IMAGES, ...TOOLS_SWIPER_IMAGES].map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.image}
                                    alt="tool"
                                    className="max-w-105 w-full rounded-[18px] shadow-md"
                                />
                            </SwiperSlide>
                        ))}
                    </SwiperContainer>
                </div>
            </div>
        </div>
    )
}
export default ToolsCompatibility;