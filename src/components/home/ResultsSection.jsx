import ResultsDekstopSlide from '@/components/home/ResultsDekstopSlide';
import { SLIDER_BOXES } from '@/utils/HomePageBoxes';
import { useState } from 'react';
import ResultsMobileSlide from '@/components/home/ResultsMobileSlide';

function HomeSlide() {
    const [activeIndex, setActiveIndex] = useState(1);
    const activeUser = SLIDER_BOXES[activeIndex]

    return (
        <div className="px-5 pt-7.5 lg:px-20 lg:py-25 ">
            <div className="max-w-7xl w-full mx-auto flex flex-col max-lg:gap-3.5 gap-8">
                <div className="text-center pb-2.5 max-lg:flex flex-col gap-6">
                    <h1>Real Results from Real Teams</h1>
                    <p className='lg:hidden sm:px-5 font-inter font-medium leading-[100%] text-primary text-base'>From physician networks to urgent care leads, YMT helps you reach verified medical professionals using filters like NPI, specialty, and facility type.</p>
                </div>
                <div className="gap-10 max-h-137 h-full max-w-282.5 w-full mx-auto hidden lg:flex">
                    <div className=''>
                        <ResultsDekstopSlide activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    </div>
                    <div className="flex flex-col gap-7 bg-white rounded-xl shadow-[13px_15px_55.5px_0px_rgba(0,0,0,0.26)] px-7.25 pt-7.5 pb-16">
                        <div className="max-w-120.5 w-full lg:h-86.75  bg-[rgba(237,224,192,1)] rounded-xl  px-27">
                            <img src={activeUser.image} className=' h-full' />
                        </div>
                        <div className='px-3.5 flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-[rgba(32,32,32,1)]'>{activeUser.name}</h4>
                            <span className='text-[rgba(128,128,128,1)] font-manrope text-normal text-sm leading-[100%]'>{activeUser.role}</span>
                        </div>
                    </div>
                </div>
                <ResultsMobileSlide activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
        </div>
    )
}
export default HomeSlide;