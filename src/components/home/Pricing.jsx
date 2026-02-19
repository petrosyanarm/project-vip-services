import { PRICING_BOXES } from "@/utils/HomePageBoxes";
import PricingCheckIcon from "@/assets/images/pricingCheckIcon.svg?react"
import Button from "@/components/ui/Button";
import PricingMobile from "@/components/home/PricingMobile";

function Pricing() {
    return (
        <div className="lg:px-11 pt-22.5 lg:pt-18">
            <div className="max-w-338 w-full mx-auto flex flex-col gap-12">
                <div className="max-w-215 w-full mx-auto flex flex-col px-5 gap-8 text-center">
                    <h1>Pricing That Scales With You</h1>
                    <p className="text-primary text-base xl:text-xl font-medium font-inter">Buy exactly what you need — starting at just $1 per lead. No subscriptions, no long-term contracts.</p>
                </div>
                <div className="hidden md:grid md:grid-cols-3 sm:gap-4 sm:px-3 lg:gap-x-10 max-w-275 mx-auto w-full">
                    {PRICING_BOXES.map((item) => (
                        <div key={item.id} className="h-112.75 rounded-[26px] px-7.5 py-8 shadow-[2px_4px_13.8px_0px_rgba(0,0,0,0.25)] w-full flex flex-col justify-between">
                            <div>
                                <div className="flex px-3 mb-5">
                                    <h3 className="max-xl:text-3xl">{item.price}</h3>
                                    <span className="max-xl:text-base text-lg pt-6 font-inter text-secondary font-medium leading-[100%]">/ Leads</span>
                                </div>
                                <div className="max-w-58 w-full ml-3 flex flex-col gap-3">
                                    <h5 className="max-xl:text-2xl">{item.title}</h5>
                                    <span className="max-xl:text-xs text-sm font-inter text-secondary font-medium leading-[100%]">{item.subTitle}</span>
                                </div>
                                <div className="flex flex-col gap-5.5 pt-5.75">
                                    <div className="flex gap-1.5">
                                        <PricingCheckIcon />
                                        <span className="max-xl:text-xs text-[15px] font-inter text-secondary font-medium leading-[100%]">{item.text1}</span>
                                    </div>
                                    <div className="flex pr-2 gap-1.5">
                                        <PricingCheckIcon />
                                        <span className="max-xl:text-xs text-[15px] font-inter text-secondary font-medium leading-[100%]">{item.text2}</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <PricingCheckIcon />
                                        <span className="max-xl:text-xs text-[15px] font-inter text-secondary font-medium leading-[100%]">{item.text3}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant={'primary'} className='max-3xl:px-5 px-22 py-2.5 font-medium'>Choose Plan</Button>
                        </div>
                    ))}
                </div>
                <PricingMobile/>
            </div>
        </div>
    )
}
export default Pricing;