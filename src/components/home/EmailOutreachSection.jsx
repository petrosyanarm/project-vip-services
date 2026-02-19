import { HOME_EMAIL_BOXES } from "@/utils/HomePageBoxes";

function EmailOutreachSection() {
    return (
        <div>
            <div className="w-full max-w-360 mx-auto px-5 pt-15 lg:py-25 lg:px-20 flex flex-col gap-16">
                <div className="flex flex-col gap-6 justify-center items-center text-center">
                    <h1>Email Outreach That Writes Itself</h1>
                    <p className="sm:px-15 md:px-30 xl:px-70 font-medium text-base lg:text-xl leading-[100%] text-primary">Once you receive your leads, we keep them warm with smart, automated follow-ups — so you can focus on closing, not chasing.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  lg:gap-x-12 lg:gap-y-5.5">
                    {HOME_EMAIL_BOXES.map(({ id, icon, title, subTitle }) => (
                        <div key={id} className="flex bg-white shadow-[0_10px_30px_rgba(0,0,0,0.13)] rounded-lg py-2 lg:py-3 gap-2 lg:gap-3">
                            <div className="pl-3 mt-2">
                                <div className="size-6 lg:size-16 py-10 flex justify-center items-center">
                                    <img className="lg:h-14" src={icon} />
                                </div>
                            </div>
                            <div className="w-0 border border-secondary"></div>
                            <div className="flex-1 flex flex-col gap-1 lg:gap-2">
                                <span className=" text-primary font-bold text-base lg:text-2xl leading-6">{title}</span>
                                <p className=" text-[rgba(32,32,32,1)] font-normal pr-1.5 text-sm lg:text-base leading-6.5">{subTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default EmailOutreachSection;