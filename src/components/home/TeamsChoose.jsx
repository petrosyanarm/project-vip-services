import { HOME_TEAMS_BOXES } from "@/utils/HomePageBoxes";

function TeamsChoose() {
    return (
        <div className="px-5 pt-20 lg:px-30 lg:pt-25">
            <div className="max-w-300 w-full mx-auto flex flex-col gap-17 lg:gap-33">
                <div className="px-8 lg:px-0 text-center">
                    <h1>Why Teams Choose YMT</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-6 ">
                    {HOME_TEAMS_BOXES.map(({ id, title, subTitle, icon }) => {
                        const Icon = icon
                        return (
                            <div key={id} className="rounded-xl px-4 py-9.5 lg:py-20.25 bg-white shadow-[2.77px_2.77px_13.17px_0px_rgba(169,206,240,0.27)] relative flex flex-col">
                                <div className="absolute w-full flex justify-center left-0 -top-7">
                                    <div className="flex justify-center items-center w-15 h-15 lg:max-w-25 lg:w-full lg:h-25 bg-[rgba(255,244,210,1)] rounded-full">
                                        <img className="size-10 lg:size-15.5" src={Icon} />
                                    </div>
                                </div>
                                <div className="mx-auto max-w-88 w-full text-center flex flex-col mt-2 gap-8">
                                    <span className="text-primary text-xl xl:text-[33px] font-inter font-bold leading-[100%]">{title}</span>
                                    <p className="text-secondary font-semibold text-base xl:text-xl leading-[100%]">{subTitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default TeamsChoose;