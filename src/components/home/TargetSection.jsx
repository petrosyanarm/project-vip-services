import Button from "@/components/ui/Button";
import TargetVector from "@/assets/images/targetVector.png";
import HomeTargetImage from "@/assets/images/targetPicture.png";

function HomeTarget() {
    return (
        <div>
            <div className="w-full max-w-360 mx-auto flex flex-col lg:flex-row pr-0 pt-12.5 pb-19 lg:pb-0 lg:pt-0 gap-10.5 lg:gap-6">
                <div className="px-5 lg:py-33.5 lg:pl-20 lg:px-0 flex flex-col gap-16">
                    <div className="max-w-165 w-full max-lg:mx-auto flex flex-col  max-lg:text-center gap-6">
                        <h2 className="hidden lg:flex">Target by Title, Industry, Funding, and More</h2>
                        <h1 className="lg:hidden">Tareget by Title, Industry & Funding</h1>
                        <p className="font-medium text-base xl:text-xl leading-[100%] text-primary">Get hyper-specific. Use filters like company size, revenue, location, NPI, department, or even intent signals to zero in on real buyers.</p>
                    </div>
                    <div className="hidden lg:flex">
                        <Button variant={'primary'} className={'px-27 py-4 font-normal text-xl leading-[100%]'}>Try It Free</Button>
                    </div>
                </div>
                <div className="px-5 sm:px-15 lg:px-3 lg:pr-5 lg:pt-15 xl:pb-13 xl:pr-27 max-lg:mx-auto flex flex-col gap-22 lg:flex-row">
                    <div className="max-w-144.5 aspect-578/589 w-full max-lg:mx-auto relative">
                        <div className="absolute left-5 sm:left-20 lg:left-2 xl:top-11 xl:left-19 w-full max-w-lg aspect-512/538 ">
                            <img className='w-full h-full' src={TargetVector} />
                        </div>
                        <div className="relative z-10 lg:right-3 xl:right-0 overflow-hidden max-w-137 aspect-548/497 w-full shadow-[-6px_4px_72px_0px_rgba(0,57,104,0.34)] rounded-2xl">
                            <img alt="Company" className="h-full w-full rounded-2xl object-cover rotate-y-180" src={HomeTargetImage} />
                        </div>
                        <div className="w-full flex justify-center mt-20 lg:hidden">
                            <Button variant={'primary'} className={'max-lg:w-full px-22 py-4 font-normal text-base lg:text-xl leading-[100%]'}>Try It Free</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeTarget;