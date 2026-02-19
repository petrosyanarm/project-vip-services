import Button from "@/components/ui/Button";
import AIGenerationIMage from '@/assets/images/AIGenerationIMage.png'
import AIGenerationIMage2 from '@/assets/images/AIGenerationIMage2.png'

function AILeadGeneration() {
    return (
        <div className="bg-[linear-gradient(101.79deg,#486F8F_-87.15%,#7794AC_-32.8%,#FFFFFF_97.03%)] relative mt-25">
            <div className="max-w-360 w-full mx-auto flex flex-col max-lg:gap-10 lg:flex-row">
                <div className="max-w-152 w-full max-lg:mx-auto px-5 pt-21 lg:px-0 lg:pl-16 lg:py-42 flex flex-col gap-9 lg:gap-16">
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h1>AI Lead Generation</h1>
                        <span className="text-base lg:text-xl font-medium leading-[100%] text-[rgba(56,56,56,1)]">Instantly reach your ideal audience and start converting leads in your industry today.</span>
                    </div>
                    <div className="w-full ">
                        <Button variant={'primary'} className={'max-lg:w-full py-3 px-5 lg:px-21 lg:py-4 text-base lg:text-xl font-normal'}>Become an Affiliate</Button>
                    </div>
                </div>
                <div className="max-w-239 right-0 absolute bottom-0 w-[50vw] overflow-hidden hidden lg:block">
                    <img alt="AIGenerationIMage" className=" w-full h-full" src={AIGenerationIMage} />
                </div>
                <div className="max-w-150 aspect-373/369 w-full h-full mx-auto overflow-hidden lg:hidden">
                    <img alt="AIGenerationIMage" className="h-full w-full" src={AIGenerationIMage2} />
                </div>
            </div>
        </div>
    )
}
export default AILeadGeneration;