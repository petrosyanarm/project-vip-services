import Button from "@/components/ui/Button";
import ClientVector from "@/assets/images/clientVector.svg?react";
import ClientCompany from "@/assets/images/companyAi.png";

function ClientSection() {
    return (
        <div className="bg-[linear-gradient(77.42deg,#FFFFFF_-6.08%,#EAECEF_36.02%,#486F8F_111.47%)] mt-3.5 pb-13">
            <div className="w-full max-w-360 mx-auto flex flex-col lg:flex-row gap-8 xl:gap-11.5">
                <div className="pt-12 lg:py-30 xl:py-40.5 px-5 lg:pl-30 max-w-160.25 w-full max-lg:mx-auto flex flex-col gap-16">
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h1 className=" text-primary">Your Next Client, Delivered by AI</h1>
                        <p className="hidden lg:block font-medium text-xl leading-[100%] text-primary">Why chase leads when AI can bring them to you — ready, verified, and matched to your exact filters.</p>
                        <p className="lg:hidden font-medium text-base leading-[100%] text-primary">Let AI deliver ready, verified leads — matched to your exact filters.</p>
                    </div>
                    <div className="hidden lg:flex gap-3">
                        <Button variant={'primary'} className={'px-5 py-4 font-normal text-xl leading-[100%]'}>Become an Affiliate</Button>
                        <Button className={'px-9 py-4 font-normal bg-white text-xl leading-[100%] rounded-lg text-primary hover:shadow-xl hover:bg-gray-200 transition-colors duration-500 '}>Purchase Leads</Button>
                    </div>
                </div>
                <div className="px-5 sm:px-15 lg:px-3 lg:pr-5 lg:pt-15 xl:pb-13 xl:pr-27 max-lg:mx-auto flex flex-col gap-22 lg:flex-row">
                    <div className="max-w-144.25 aspect-577/560 w-full relative">
                        <div className="absolute left-4 top-2 xl:left-8 w-full max-w-137.5 aspect-550/577">
                            <ClientVector className="w-full h-full" />
                        </div>
                        <div className="relative z-10 overflow-hidden max-w-137 aspect-548/497 w-full shadow-[-6px_4px_72px_0px_rgba(0,57,104,0.34)] rounded-2xl">
                            <img alt="Company" className="h-full w-full rounded-2xl object-cover rotate-y-180 " src={ClientCompany} />
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-col gap-3">
                        <Button variant={'primary'} className={'px-5 py-4 font-normal text-base lg:text-xl leading-[100%]'}>Become an Affiliate</Button>
                        <Button className={'px-9 py-4 font-normal bg-white text-base lg:text-xl leading-[100%] rounded-lg text-primary hover:shadow-xl hover:bg-gray-200 transition-colors duration-500 '}>Purchase Leads</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientSection;