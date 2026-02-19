import { PRICING_BOXES } from "@/utils/HomePageBoxes";
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from "@/components/ui/SwiperContainer";
import { Navigation } from "swiper/modules";
import PricingCheckIcon from "@/assets/images/pricingCheckIcon.svg?react"
import Button from "@/components/ui/Button";

function PricingMobile() {
    return (
        <div className="md:hidden sm:max-w-5xl sm:w-full sm:mx-auto sm:flex sm:gap-5">
            <SwiperContainer
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={3}
                centered
                initialSlide={1}
                className="overflow-visible"
                breakpoints={{
                    0: {
                        slidesPerView: 1.9,
                    },
                    450: {
                        slidesPerView: 2.5
                    },
                    550: {
                        slidesPerView: 3,
                    },
                }}
                pagination={false}>
                {PRICING_BOXES.map((item) => (
                    <SwiperSlide key={item.id} className="py-4">
                        <div className="max-w-47.5 h-65 rounded-[14px] px-4 py-4.5 shadow-[2px_4px_13.8px_0px_rgba(0,0,0,0.25)] w-full flex flex-col justify-between">
                            <div className="">
                                <div className="flex px-3">
                                    <h3 className="text-[27px]">{item.price}</h3>
                                    <span className="text-xs lg:text-lg pt-6 font-inter text-secondary font-medium leading-[100%]">/ Leads</span>
                                </div>
                                <div>
                                    <div className="max-w-58 w-full ml-3 flex flex-col gap-3">
                                        <h5 className="text-base">{item.title}</h5>
                                        <span className="text-[8px] lg:text-sm font-inter text-secondary font-medium leading-[100%]">{item.subTitle}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pt-4">
                                    <div className="flex gap-1.5">
                                        <PricingCheckIcon className='size-3.25' />
                                        <span className="text-[8px] font-inter text-secondary font-medium leading-[100%]">{item.text1}</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <PricingCheckIcon className='size-3.25' />
                                        <span className="text-[8px] font-inter text-secondary font-medium leading-[100%]">{item.text2}</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <PricingCheckIcon className='size-3.25' />
                                        <span className="text-[8px] font-inter text-secondary font-medium leading-[100%]">{item.text3}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant={'primary'} className='px-4 py-2 font-medium text-xs'>Choose Plan</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperContainer>
        </div>
    )
}
export default PricingMobile;